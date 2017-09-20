//------ Dit is zodat de Console het op de pagina print --------------------//
if (typeof console  != "undefined")
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

console.log = function(message) {
    console.olog(message);
    $('#debugDiv').append('<p>' + message + '</p>');
};
console.error = console.debug = console.info =  console.log

//-------------------------------------------------------------------------//

//Opdracht 2,3,4,5,6
//declareer een variabele
console.log("-----------------------Opdracht 1-----------------------");
var dog = "dog";
var dogs= "cheese", cat = "cat" , cow = "cow";
console.log(dog);
console.log(dogs+cat+cow);


var A , B, C, D, E, F, G, H, I, J, K, L, M , N , O , P, Q, R, S, T, U, V, W, X, Y, Z;

console.log("-----------------------Opdracht 4-----------------------");
console.log("Style Guide = Goed, Netjes");
// Waarden veranderen
A = "String";
B = "Value";
C = "School";
D = false;
E = "The Letter S";
F = "Something";
G = "I don't know";
H = "Time";
I = "Text";
J = "Number";
K = 1434345;
L = true;
M = false;
N = 43;
O = "***";
P = false;
Q = true;
R = false;
S = "Seven";
T = true;
U = "HeLlO";
V = "Flash";
W = false;
X = false;
Y = "Pizza";
Z = "Haha";

//Opdracht 6
//Show Introspection
console.log("-----------------------Opdracht 6-----------------------");
var arrayABC = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];

for (var Count_thing = 0; Count_thing < arrayABC.length; Count_thing++){
var item = arrayABC[Count_thing];

    if (typeof (item) === "string") {
        ItemType = "string";
    } else if (typeof (item) === "number") {
        ItemType = "number";
    } else if (typeof (item) === "boolean") {
        ItemType = "boolean";
    } else { ItemType = "Error: Item is Neither A String/Number/Boolean.";}

    console.log("Typeof: " + arrayABC[Count_thing]+ " = " + ItemType );
    console.log("");
}
console.log("-----------------------Opdracht 7-----------------------");
var variabele = 0;
var numbers = 0;
var strings = 0;
var booleans = 0;

for (var y = 0; y < arrayABC.length; y++) {
  var meti = arrayABC[y];

  if (typeof (meti) === "string") {
      strings = strings + 1;
  } else if (typeof (meti) === "number") {
      numbers = numbers + 1;
  } else if (typeof (meti) === "boolean") {
      booleans = booleans + 1;
  }
}
console.log("Numbers: " + numbers);
console.log("Strings: " + strings);
console.log("Booleans: " + booleans);
console.log("");
console.log("Total variables: " + (numbers+strings+booleans));

console.log("-----------------------Opdracht 8-----------------------");

// if (typeof (item) === "string" ){
//     (item) = boolean
// }
console.log("-----------------------Opdracht 9-----------------------");

function letters() {
    console.log(I + " * " + J);
}
function cijfers() {
    console.log(K + "" + N);
}

letters();
cijfers();
console.log("-----------------------Opdracht 10-----------------------");

//De 'Functie' type kan gebruikt worden om een functie in een expressie te definiëren
var AnotherFunction = function () {
    console.log("Function")
};
//Het belangrijkste verschil tussen function declaration & function expression is dat je bij een function declaration de Functie() kunt aanroepen voordat je hem definieert.
//Bij function expression kan dit niet, hier moet je hem eerst definiëren voordat je hem kunt gebruiken.
AnotherFunction();

var Food = function () {
    console.log("Food!")
};
Food();

console.log("-----------------------Opdracht 11-----------------------");

//Functies opgeslagen in variabelen hebben geen functienamen nodig. Ze worden altijd opgeroepen met behulp van de variabele naam.

var cheesebread = function (a, b) {return a * b};
var bread = function (fd, fg) {return fd * fg};

console.log(cheesebread());
console.log(bread());

console.log("-----------------------Opdracht 12-----------------------");

(function IIFE() {
    console.log("IFFE WORKS!")
})();

console.log("-----------------------Opdracht 13-----------------------");

var addTo = (function () {
    var amount = 0;
    return function () {return amount += 1;}
})();

addTo();
addTo();

console.log("-----------------------Opdracht 14-----------------------");

var   favoSinger="Rapper Sjors";
var   favoBand="Abba";
function myBand() {
    favoBand="Josti Band";

    var   favoSinger="Flea";
    console.log(favoSinger + " of " + favoBand);
}
myBand();

console.log("-----------------------Opdracht 14-----------------------");
