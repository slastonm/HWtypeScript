/*** Created by Makc on 11/4/2017.*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
document.addEventListener("DOMContentLoaded", function (event) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDistanseToStart = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        Point.origin = new Point(0, 0);
        return Point;
    })();
    var point = new Point(5, 5);
    var result = point.getDistanseToStart();
    alert(result);
    var ColoredPoint = (function (_super) {
        __extends(ColoredPoint, _super);
        function ColoredPoint(x, y, color) {
            _super.call(this, x, y);
            this.color = color;
        }
        ColoredPoint.prototype.toString = function () {
            return _super.prototype.toString.call(this) + "color =" + this.color;
        };
        return ColoredPoint;
    })(Point);
    var coloredPoint = new ColoredPoint(5, 7, 'red');
    alert(coloredPoint);
});
//# sourceMappingURL=main.js.map