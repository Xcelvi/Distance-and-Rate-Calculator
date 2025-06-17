import rateSheet from './rates.js'
import getOrigin from './location.js'
let deliveryValue = ''
let addressValue = ''
let zipValue = ''
let addy = ''
let distanceMiles = 0
let weight = 0
document.getElementById('submit').addEventListener('click', () => {
    deliveryValue = document.getElementById('deliveryType').value;
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
    directionsService.route({origin: 'Kenner,LA', destination: addy, travelMode: google.maps.TravelMode.DRIVING,}, (results, status) => {
        if (status === google.maps.DirectionsStatus.OK){
            const route = results.routes[0];
            const leg = route.legs[0];
            distanceMiles = leg.distance.text
            distanceMiles = parseInt(distanceMiles)
            console.log(distanceMiles)
        }
    }
    )

    console.log('Rate:', rateSheet(deliveryValue, distanceMiles, weight))
    let originCode = getOrigin(zipValue)
})

