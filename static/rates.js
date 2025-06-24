let price = 0;
// This is our entire rate sheet for DFW. It takes our origin located in the location.js and the weight to calculate
function rateSheet(originCode, weight) {
  if (originCode == "dfwA") {
    if (weight < 356) {
      price = 25;
      return parseFloat(price.toFixed(2));
    } else if (weight >= 356 && weight <= 999) {
      price = (weight / 100) * 7.04;
      return parseFloat(price.toFixed(2));
    } else if (weight > 999 && weight <= 1999) {
      price = (weight / 100) * 6.41;
      return parseFloat(price.toFixed(2));
    } else if (weight > 1999 && weight <= 2999) {
      price = (weight / 100) * 6.01;
      return parseFloat(price.toFixed(2));
    } else if (weight > 2999 && weight <= 4999) {
      price = (weight / 100) * 5.61;
      return parseFloat(price.toFixed(2));
    } else if (weight > 4999 && weight <= 6682) {
      price = (weight / 100) * 4.34;
      return parseFloat(price.toFixed(2));
    } else if (weight > 6682) {
      price = 290;
      return parseFloat(price.toFixed(2));
    }
  } else if (originCode == "dfwB") {
    if (weight < 315) {
      price = 28;
      return parseFloat(price.toFixed(2));
    } else if (weight >= 315 && weight <= 999) {
      price = (weight / 100) * 8.91;
      return parseFloat(price.toFixed(2));
    } else if (weight > 999 && weight <= 1999) {
      price = (weight / 100) * 7.71;
      return parseFloat(price.toFixed(2));
    } else if (weight > 1999 && weight <= 2999) {
      price = (weight / 100) * 7.11;
      return parseFloat(price.toFixed(2));
    } else if (weight > 2999 && weight <= 4999) {
      price = (weight / 100) * 6.09;
      return parseFloat(price.toFixed(2));
    } else if (weight > 4999 && weight <= 6354) {
      price = (weight / 100) * 4.8;
      return parseFloat(price.toFixed(2));
    } else {
      price = 305;
      return parseFloat(price.toFixed(2));
    }
  } else if (originCode == "dfwC") {
    if (weight < 322) {
      price = 34;
      return parseFloat(price.toFixed(2));
    } else if (weight >= 322 && weight <= 999) {
      price = (weight / 100) * 10.9;
      return parseFloat(price.toFixed(2));
    } else if (weight > 999 && weight <= 1999) {
      price = (weight / 100) * 9.4;
      return parseFloat(price.toFixed(2));
    } else if (weight > 1999 && weight <= 2999) {
      price = (weight / 100) * 8.45;
      return parseFloat(price.toFixed(2));
    } else if (weight > 2999 && weight <= 4327) {
      price = (weight / 100) * 7.51;
      return parseFloat(price.toFixed(2));
    } else if (weight > 4999 && weight <= 5371) {
      price = (weight / 100) * 6.05;
      return parseFloat(price.toFixed(2));
    } else {
      price = 325;
      return parseFloat(price.toFixed(2));
    }
  } else if (originCode == "dfwD") {
    if (weight < 231) {
      price = 41.35;
      return parseFloat(price.toFixed(2));
    } else if (weight >= 231 && weight <= 999) {
      price = (weight / 100) * 8.91;
      return parseFloat(price.toFixed(2));
    } else if (weight > 999 && weight <= 1999) {
      price = (weight / 100) * 7.71;
      return parseFloat(price.toFixed(2));
    } else if (weight > 1999 && weight <= 2999) {
      price = (weight / 100) * 7.11;
      return parseFloat(price.toFixed(2));
    } else if (weight > 2999 && weight <= 3691) {
      price = (weight / 100) * 6.09;
      return parseFloat(price.toFixed(2));
    } else {
      price = 450;
      return parseFloat(price.toFixed(2));
    }
  } else if (originCode == "dfwE") {
    if (weight < 315) {
      price = 28;
      return parseFloat(price.toFixed(2));
    } else if (weight >= 315 && weight <= 999) {
      price = (weight / 100) * 8.91;
      return parseFloat(price.toFixed(2));
    } else if (weight > 999 && weight <= 1999) {
      price = (weight / 100) * 7.71;
      return parseFloat(price.toFixed(2));
    } else if (weight > 1999 && weight <= 2999) {
      price = (weight / 100) * 7.11;
      return parseFloat(price.toFixed(2));
    } else if (weight > 2999 && weight <= 3731) {
      price = (weight / 100) * 6.09;
      return parseFloat(price.toFixed(2));
    } else {
      price = 500;
      return parseFloat(price.toFixed(2));
    }
  }
}
export default rateSheet;
