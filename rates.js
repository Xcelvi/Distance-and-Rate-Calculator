let price = 0

function rateSheet(deliveryValue, distanceMiles, weight) {
    if (deliveryValue == 1){
        if ((distanceMiles <= 25) && (weight <= 200)){
            price = 28
        } else if ((distanceMiles <= 25) &&  (weight > 200)){
        price = 53
        } else if ((distanceMiles <= 50) && (weight <= 200)){
            price = 38
        } else if ((distanceMiles <=50) && (weight > 200)){
            price = 52
        } else if ((distanceMiles > 50) && (weight <= 200)){
            price = 68
        } else {
            price = 77
        }
    }

    return price
}

export default rateSheet