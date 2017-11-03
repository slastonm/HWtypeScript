/**
 * Created by Makc on 11/3/2017.
 */
var a = 5;
console.log(a);
var oneString = "1";
var oneNumber = 2;
var isEqual = (oneString == oneNumber.toString());
console.log(isEqual);
var voidVar;
voidVar = undefined; //or null in void
//=======  Enum ========
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["Closed"] = 1] = "Closed";
    orderStatus[orderStatus["Opened"] = 2] = "Opened";
    orderStatus[orderStatus["Pending"] = 3] = "Pending";
    orderStatus[orderStatus["Canceled"] = 4] = "Canceled";
})(orderStatus || (orderStatus = {}));
var enumVariable = orderStatus.Opened;
console.log(enumVariable); //number value;
console.log(orderStatus[enumVariable]); //text value;
var rect = { Width: 50, Height: 60 };
rect = { Width: 70, Height: 60 };
console.log(rect.Width);
//=======  Array ========
var arrayVar = ['hi', 'My name'];
var arrayAny = [1, true, 'Hi'];
arrayAny.push(rect);
//=======  Function ========
function sumFunction(x, y) {
    return x + y;
}
var result = sumFunction(2, 3);
function temperatureConvertor(celsius, calculatecKelvin) {
    if (calculatecKelvin === void 0) { calculatecKelvin = false; }
    if (calculatecKelvin) {
        return celsius + 273;
    }
    else {
        return (celsius * (9 / 5) + 32);
    }
}
var t1 = temperatureConvertor(15, true);
var t2 = temperatureConvertor(15);
//# sourceMappingURL=main.js.map