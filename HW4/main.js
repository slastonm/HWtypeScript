/*** Created by Makc on 11/4/2017.*/
var MyNameSpace;
(function (MyNameSpace) {
    function someFunction(str) {
        alert(str);
        return str;
    }
    MyNameSpace.someFunction = someFunction;
})(MyNameSpace || (MyNameSpace = {}));
var Main;
(function (Main) {
    function getData(data) {
        return data;
    }
    var otput = getData("4 November");
})(Main || (Main = {}));
document.addEventListener("DOMContentLoaded", function (event) {
    MyNameSpace.someFunction('Hello');
});
//# sourceMappingURL=main.js.map