/*** Created by Makc on 11/4/2017.*/


namespace MyNameSpace{
     export  function someFunction(str:string):string{
         alert(str);
        return str;
    }
}

namespace Main{
    function getData<someValue>(data:someValue){
        return data;
    }
    var otput = getData("4 November");
}

document.addEventListener("DOMContentLoaded", function(event) {
    MyNameSpace.someFunction('Hello');
});


