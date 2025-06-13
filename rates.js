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
    if (deliveryValue == 2){
         if ((distanceMiles <= 25) && (weight <= 200)){
            price = 32
        } else if ((distanceMiles <= 25) &&  (weight > 200)){
            price = 51
        } else if ((distanceMiles <= 50) && (weight <= 200)){
            price = 44
        } else if ((distanceMiles <=50) && (weight > 200)){
            price = 61
        } else if ((distanceMiles > 50) && (weight <= 200)){
            price = 79
        } else {
            price = 92
        }
    }
    if (deliveryValue == 3){
         if ((distanceMiles <= 25) && (weight <= 200)){
            price = 52
        } else if ((distanceMiles <= 25) &&  (weight > 200)){
            price = 72
        } else if ((distanceMiles <= 50) && (weight <= 200)){
            price = 64
        } else if ((distanceMiles <=50) && (weight > 200)){
            price = 81
        } else if ((distanceMiles > 50) && (weight <= 200)){
            price = 100
        } else {
            price = 112
        }
    }
     if (deliveryValue == 4){
         if ((distanceMiles <= 25) && (weight <= 200)){
            price = 68
        } else if ((distanceMiles <= 25) &&  (weight > 200)){
            price = 87
        } else if ((distanceMiles <= 50) && (weight <= 200)){
            price = 81
        } else if ((distanceMiles <=50) && (weight > 200)){
            price = 96
        } else if ((distanceMiles > 50) && (weight <= 200)){
            price = 115
        } else {
            price = 127
        }
    }
    return price
}

export default rateSheet