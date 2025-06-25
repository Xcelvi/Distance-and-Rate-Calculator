#Imports
from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
#My App
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder, get this from Flask-SQLAlchemy documentation
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(app)
#Data class ~ Row of data
class MyTask(db.Model):
    #create all rows of the database
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(100), nullable=False)
    complete = db.Column(db.Integer)
    created = db.Column(db.DateTime, default=datetime.utcnow)
    #return a string of the database
    def __repr__(self) -> str:
        return f'Task {self.id}'

#Establish home page
@app.route("/", methods=["POST","GET"])
def index():
    #Add task
    if request.method == "POST":
        current_task = request.form['content']
        new_task = MyTask(content=current_task)
        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect("/")
        except Exception as e:
            print(f"Error:{e}")
            return f"ERROR:{e}"
    #See all current tasks
    else:
        tasks = MyTask.query.order_by(MyTask.created).all()
        return render_template("MSYQuotes.html", tasks=tasks)
#Establish AI page
@app.route("/ai", methods=["POST", "GET"])
def ai():
    return render_template('ai.html')
@app.route("/MSY", methods=["POST", "GET"])
def ai():
    return render_template('MSYQuotes.html')
if __name__ in ("__main__"):
    #Established a connection with the term context. This handles current requests, app, and user
    with app.app_context():
        db.create_all()

    app.run(debug=True)