let deliveryValue = ''
let addressValue = ''
let zipValue = ''
let address = ''


document.getElementById('submit').addEventListener('click', () => {
    deliveryValue = document.getElementById('deliveryType').value;
    addressValue = document.getElementById('address').value;
    zipValue = document.getElementById('zip').value;
    weight = document.getElementById('weight').value;
    addy = addressValue + ',' + zipValue
})

apiKey = 'AIzaSyB_MehJUmHury0rl2pJ1Obi_sYmqaIRz9w'

let originLocation = 'Kenner,LA';
let originLat = 30
let originLong = -90
// geocode the addresses received to lat and long


document.getElementById('submit').addEventListener('click', () => {
    
    const directionsService = new google.maps.DirectionsService();
    directionsService.route({origin: 'Kenner,LA', destination: addy, travelMode: google.maps.TravelMode.DRIVING,}, (results, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            const route = results.routes[0];
            const leg = route.legs[0];
            distanceMiles = leg.distance.text
            console.log(distanceMiles)
        }
    }
    )
})

