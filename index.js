//1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin/
//kvadrat tenliyi hell ederken bize lazim olan dusturlar;
// var discriminant = b * b - 4 * a * c; ,var x1,2 = (-b +- Math.sqrt(discriminant)) / (2 * a); 
//bu dusturlar discriminant > 0 sert daxilinde odenir,diger halda yeni,discriminant ==0 dusturu dovreye girir

let a = 1, b = -3, c = 2;

let d = b * b - 4 * a * c;

if (d >= 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`Kökler: x1 = ${x1}, x2 = ${x2}`);
} else {
    console.log("kok yoxdur");
}


//2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.

var A=4;
for (let i =1 ; i<1000 ;i++) { 
    if (i%4==0) {console.log(i);
        
    }
   
}
