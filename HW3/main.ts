/*** Created by Makc on 11/4/2017.*/

document.addEventListener("DOMContentLoaded", function(event) {
    class Point{
        constructor(public x:number, public y:number){

        }
        public getDistanseToStart():number{
            return Math.sqrt(this.x*this.x+this.y*this.y );
        }
        static origin = new Point(0, 0);
    }

    let point = new Point(5, 5);

    let result = point.getDistanseToStart();

    alert(result);


    class ColoredPoint extends Point{
        constructor(x:number, y:number, public color: string){
            super (x, y)
        }
        public toString(){
            return super.toString()+ "color =" + this.color;
        }
    }

    let coloredPoint = new ColoredPoint(5, 7, 'red');

    alert(coloredPoint);
});
