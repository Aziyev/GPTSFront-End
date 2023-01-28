// DATA Types - primitive / non-primitive

var firstname = "Idris"; //string

var age = 20; //number

var isStudent = false; //boolean

var address = null; //null

var group; //undefined

// Non-Primitive => Class/Object/Method/Property   -referans typeler obyektler

var Person = {
    ad: "Ali",
    yas:20,
    tevellud: function() {
    return new Date().getFullYear() - this.yas;
}

}

console.log(Person.tevellud());

// Array 

var colors = ['red', 'black' , 'green', 'white'];
console.log(colors[1])


var elements = ['gpts', 20, true , Person]

//function

function Change() {
    document.body.style.backgroundColor = 'red';
    /* alert('bg color chanced!'); */
}



//print to screen = > console/alert/ document.write / innerHTML/ innerText

/* console.log(firstname);
console.warn(firstname);    //warning
console.error(firstname);   //error
console.table(colors); */  //table

/* alert(isStudent); */
/* document.write(firstname)
document.write("<h1>WELCOME</h1>")

function add(){
    document.getElementById('text').innerHTML = firstname;
    document.getElementById('text').innerText = "salam";

}
 */
//operators 
//Arithmetic (+ - * /)
//Comparison (> < >= <=)
//Assigment (= == === != )
//Logical (&& || !)


var num1 =20;
var num2 = 10;
var cem = num1 + num2;
var ferq = num1 - num2;
var hasil = num1 * num2;
var bolme = num1 / num2;
console.log(cem,ferq,hasil,bolme)



var ad = "Idris";
var soyad = "Aziyev";
console.log(ad+" "+soyad)

//undefined
//null
//0

var x = null;
var y = 0;
var z;



