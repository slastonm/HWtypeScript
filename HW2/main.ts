/**
 * Created by Makc on 11/3/2017.
 */
var a:number =5;
console.log(a);

var oneString  ="1";
var oneNumber = 2;

var isEqual = (oneString == oneNumber.toString());
console.log(isEqual);

var voidVar: void;

voidVar = undefined; //or null in void



//=======  Enum ========

enum orderStatus {
    Closed = 1,
    Opened = 2,
    Pending = 3,
    Canceled = 4
}

var enumVariable: orderStatus = orderStatus.Opened;
console.log(enumVariable);  //number value;

console.log(orderStatus[enumVariable]);  //text value;

var rect = {Width:50, Height:60}

rect = {Width:70, Height:60}

console.log(rect.Width);


//=======  Array ========

var arrayVar: string[] = ['hi', 'My name'];

var arrayAny: any[] = [1, true, 'Hi'];

arrayAny.push(rect);

 //=======  Function ========

function sumFunction (x: number, y:number | any):number{
    return x+y;
}

var result = sumFunction(2, 3);



function temperatureConvertor (celsius: number, calculatecKelvin: boolean= false ): number{
    if(calculatecKelvin ){
        return celsius +273;
    }
    else{
        return (celsius*(9/5)+32);
    }
}

var t1 = temperatureConvertor(15, true);

var t2 =  temperatureConvertor(15);


