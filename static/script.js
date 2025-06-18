import rateSheet from './rates.js'
import getOrigin from './location.js'
let deliveryValue = ''
let addressValue = ''
let zipValue = ''
let addy = ''
let distanceMiles = 0
let weight = 0
let price = 0
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
    
    let originCode = getOrigin(zipValue)
    price = rateSheet(originCode, weight)
    const div = document.getElementById('ID')
    div.innerHTML = "Price: $" + price
    console.log('Price:', price)
})

const docFee = 25
const waiting = 55
const photos = 10
const hazmant = 75
const liftA = 40
const liftD = 55
const inside = 20
const mall = 25
const refine = 40
const resi = 20

document.getElementById('accessCharges').addEventListener('change', function(event){
    const btn = event.target
    let accessPrice = event.target.id
    accessPrice = parseInt(accessPrice)
    if (btn.classList.contains('off')){
        btn.classList.replace('off', 'on')
        price = price + accessPrice
        const div = document.getElementById('ID')
        div.innerHTML = "Price: $" + price
        console.log('Price:', price)
    } else{
        btn.classList.replace('on', 'off')
        price = price - accessPrice
        const div = document.getElementById('ID')
        div.innerHTML = "Price: $" + price
        console.log('Price:', price)
    }
})
document.getElementById('accessChargess').addEventListener('change', function(event){
    const btn = event.target
    let accessPrice = event.target.id
    accessPrice = parseInt(accessPrice)
    if (btn.classList.contains('off')){
        btn.classList.replace('off', 'on')
        price = price + accessPrice
        const div = document.getElementById('ID')
        div.innerHTML = "Price: $" + price
        console.log('Price:', price)
    } else{
        btn.classList.replace('on', 'off')
        price = price - accessPrice
        const div = document.getElementById('ID')
        div.innerHTML = "Price: $" + price
        console.log('Price:', price)
    }
})
