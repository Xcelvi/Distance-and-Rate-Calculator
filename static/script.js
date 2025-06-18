import rateSheet from './rates.js'
import getOrigin from './location.js'
let deliveryValue = ''
let addressValue = ''
let zipValue = ''
let addy = ''
let distanceMiles = 0
let weight = 0
let price = 0
//establishes all the values from the user inputted data
document.getElementById('submit').addEventListener('click', () => {
    addressValue = document.getElementById('address').value;
    zipValue = Number(document.getElementById('zip').value);
    weight = document.getElementById('weight').value;
    addy = addressValue + ',' + zipValue
})



let originLocation = 'Kenner,LA';
let originLat = 30
let originLong = -90
let originCode = ''
// geocode the addresses received to lat and long

document.getElementById('submit').addEventListener('click', () => {
    
    const directionsService = new google.maps.DirectionsService();
    //Compared the inputted address to the Origin, and outputs the driving distance
    directionsService.route({origin: 'Kenner,LA', destination: addy, travelMode: google.maps.TravelMode.DRIVING,}, (results, status) => {
        if (status === google.maps.DirectionsStatus.OK){
            const route = results.routes[0];
            const leg = route.legs[0];
            distanceMiles = leg.distance.text
            distanceMiles = parseInt(distanceMiles)
            console.log(distanceMiles)
        }
    }
    //When the  submit button is pressed, it flips all accessorials to off
    )
    document.querySelectorAll('.btn-check.on').forEach(el => el.checked = false)
    document.querySelectorAll('.btn-check.on').forEach( el =>
        el.classList.replace('on', 'off')
    )
    //Calculates and displays the price
    price = 0
    let originCode = getOrigin(zipValue)
    price = rateSheet(originCode, weight)
    const div = document.getElementById('ID')
    if (price){
        div.innerHTML = "Price: $" + price
        console.log('Price:', price)
    }
})

// Adds the charges to the price if price is established, and turns the button on
document.getElementById('accessCharges').addEventListener('change', function(event){
    const btn = event.target
    let accessPrice = event.target.id
    accessPrice = parseInt(accessPrice)
    if (btn.classList.contains('off')){
        btn.classList.replace('off', 'on')
        if (price){
            price = price + accessPrice
            const div = document.getElementById('ID')
            div.innerHTML = "Price: $" + price
            console.log('Price:', price)
        }
    } else{
        btn.classList.replace('on', 'off')
        if (price){
            price = price - accessPrice
            const div = document.getElementById('ID')
            div.innerHTML = "Price: $" + price
            console.log('Price:', price)
        }
    }
})
document.getElementById('accessChargess').addEventListener('change', function(event){
    const btn = event.target
    let accessPrice = event.target.id
    accessPrice = parseInt(accessPrice)
    if (btn.classList.contains('off')){
        btn.classList.replace('off', 'on')
        if (price){
            price = price + accessPrice
            const div = document.getElementById('ID')
            div.innerHTML = "Price: $" + price
            console.log('Price:', price)
        }
    } else{
        btn.classList.replace('on', 'off')
        if (price){
            price = price - accessPrice
            const div = document.getElementById('ID')
            div.innerHTML = "Price: $" + price
            console.log('Price:', price)
        }
    }
})