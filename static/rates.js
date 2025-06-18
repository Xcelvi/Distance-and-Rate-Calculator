let price = 0

function rateSheet(originCode, weight) {
    if (originCode == 'dfwA'){
        if (weight < 356){
            price = 25
            return price
        } else if (weight >= 356 && weight <= 999){
            price = (weight/100) * 7.04
            return price
        }else if (weight > 999 && weight <= 1999){
            price = (weight/100) * 6.41
            return price
        }else if (weight > 1999 && weight <= 2999){
            price = (weight/100) * 6.01
            return price
        }else if (weight > 2999 && weight <= 4999){
            price = (weight/100) * 5.61
            return price
        }else if (weight > 4999 && weight <= 6682){
            price = (weight/100) * 4.34
            return price
        }else if (weight > 6682) {
            price = 290
            return price
        }
    } else if (originCode == 'dfwB'){
        if (weight < 315){
            price = 28
            return price
        } else if (weight >= 315 && weight <= 999){
            price = (weight/100) * 8.91
            return price
        }else if (weight > 999 && weight <= 1999){
            price = (weight/100) * 7.71
            return price
        }else if (weight > 1999 && weight <= 2999){
            price = (weight/100) * 7.11
            return price
        }else if (weight > 2999 && weight <= 4999){
            price = (weight/100) * 6.09
            return price
        }else if (weight > 4999 && weight <= 6354){
            price = (weight/100) * 4.80
            return price
        }else {
            price = 305
            return price
        }
    } else if (originCode == 'dfwC'){
        if (weight < 322){
            price = 34
            return price
        } else if (weight >= 322 && weight <= 999){
            price = (weight/100) * 10.9
            return price
        }else if (weight > 999 && weight <= 1999){
            price = (weight/100) * 9.4
            return price
        }else if (weight > 1999 && weight <= 2999){
            price = (weight/100) * 8.45
            return price
        }else if (weight > 2999 && weight <= 4327){
            price = (weight/100) * 7.51
            return price
        }else if (weight > 4999 && weight <= 5371){
            price = (weight/100) * 6.05
            return price
        }else{
            price = 325
            return price
        }
    }else if (originCode == 'dfwD'){
        if (weight < 231){
            price = 41.35
            return price
        } else if (weight >= 231 && weight <= 999){
            price = (weight/100) * 8.91
            return price
        }else if (weight > 999 && weight <= 1999){
            price = (weight/100) * 7.71
            return price
        }else if (weight > 1999 && weight <= 2999){
            price = (weight/100) * 7.11
            return price
        }else if (weight > 2999 && weight <= 3691){
            price = (weight/100) * 6.09
            return price
        }else {
            price = 450
            return price
        }
    }else if (originCode == 'dfwE'){
        if (weight < 315){
            price = 28
            return price
        } else if (weight >= 315 && weight <= 999){
            price = (weight/100) * 8.91
            return price
        }else if (weight > 999 && weight <= 1999){
            price = (weight/100) * 7.71
            return price
        }else if (weight > 1999 && weight <= 2999){
            price = (weight/100) * 7.11
            return price
        }else if (weight > 2999 && weight <= 3731){
            price = (weight/100) * 6.09
            return price
        }else {
            price = 500
            return price
        }
    }
}
export default rateSheet