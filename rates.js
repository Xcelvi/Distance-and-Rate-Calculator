let price = 0

function rateSheet() {
    if (deliveryValue == 1)
        if ((distanceMiles <= 25) && (weight <= 200)){
            price = 28
        } else if ((distance <= 25) &&  (weight > 200)){
        price = 53
        } else if ((distance <= 50) && (weight <= 200)){
            price = 38
        } else if ((distance <=50) && (weight > 200)){
            price = 52
        } else if ((distance > 50) && (weight <= 200)){
            price = 68
        } else {
            price = 77
        }

    }