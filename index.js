//1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin/
//kvadrat tenliyi hell ederken bize lazim olan dusturlar;
// var discriminant = b * b - 4 * a * c; ,var x1,2 = (-b +- Math.sqrt(discriminant)) / (2 * a); 
//bu dusturlar discriminant > 0 sert daxilinde odenir,diger halda yeni,discriminant ==0 dusturu dovreye girir

function quadraticEquation(a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant == 0) {
        var x = -b / (2 * a);
        return [x];
    } else {
        return [];
    }
}

var a = prompt("a dəyərini daxil edin:");
var b = prompt("b dəyərini daxil edin:");
var c = prompt("c dəyərini daxil edin:");

var result = quadraticEquation(a, b, c);

if (result.length > 0) {
    console.log("Tənliyin kökləri:", result.join(", "));
} else {
    console.log("Tənliyin kökü yoxdur.");
}
 //eyer a,b,c ededlerine konkret qiymetler versek  onda kod bele olacaq:
 //var a = 5
//var b = 4
//var c = 3

//2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.

var A=4;
for (let i =1 ; i<1000 ;i++) { 
    if (i%4==0) {console.log(i);
        
    }
   
}
