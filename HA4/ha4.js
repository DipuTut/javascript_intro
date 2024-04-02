
console.log("Aufgabe 1: Block-Scoped Variablen.")
for ( let i = 1; i <=10; i++) {
 console.log(i); 
}
// console.log(i+1); 

// ReferenceError: i is not defined.
// Denn auf die Variable „i“ kann nur 
// innerhalb der Schleife zugegriffen werden. 
// Es ist Block-Scoped Variable.


console.log("Aufgabe 2: Funktion-Scoped Variablen.")

function myFunction() {
  var testVar = "I'm a variable";
  console.log(testVar);
}

myFunction();
// console.log(testVar);  

// ReferenceError: testVar is not defined.
// Weil auf die innerhalb einer Funktion 
// definierte Variable „testVar“ von außerhalb 
// der Funktion nicht zugegriffen werden kann.
// Est ist Funktion-Scoped Variable

console.log("Aufgabe 3: Konstanten mit const.")

const konstWert = 5; 
console.log(konstWert);

// konstWert = 6;
// TypeError: Assignment to constant variable.
// Denn die Variable „const“ ist ein Schlüsselwort, 
// mit dem eine Variable deklariert wird, der kein 
// neuer Wert zugewiesen werden kann.


console.log("Aufgabe 4:  Temporale Dead Zone.")

{
// status's TDZ geht hier weiter
// status's TDZ geht hier weiter
let status;  // status's TDZ endet hier 

console.log(status); // gibt 'undefined' zurück, da die TDZ von 'status' hier nicht existiert

status = "I am a Robot";  // 'status's TDZ hier nicht existiert

console.log(status); // gibt "I am a Robot" zurück, da die TDZ von 'status' hier nicht existiert
}



console.log("Aufgabe 5:  var in Loops.")

  for ( var i = 1; i <=10; i++) {
   function display(n) {
    m = n * i;
    console.log(m);
   }
   display(2);
  }
 // Auf eine Variable innerhalb der Schleife kann
 // von der Funktion zugegriffen werden


console.log("Aufgabe 6: Block-Scoped Funktionen.")

if(true)
{
  var v1 = 10;
  let v2= 20;
  console.log(v1);
  console.log(v2); 
}

console.log(v1); // 
// console.log(v2); // ReferenceError: v2 is not defined
// Da 'var' Variablen auf dem Funktionsumfang basieren, 
// können wir auf v1 zugreifen.
// 'let' Variablen basieren jedoch auf dem Blockbereich, 
// was bedeutet dass auf v2 außerhalb des if-Blocks nicht 
// zugegriffen werden kann.



console.log("Aufgabe 7: Globale Variablen.")

let sayHi = 'Hallo'
const greet = 'Guten Morgen'
var sayHola = 'Hola Hola'

// console.log(window.hasOwnProperty('sayHi')) //false
// console.log(window.hasOwnProperty('greet')) //false
// console.log(window.hasOwnProperty('sayHola')) //true

// ????????????



console.log("Aufgabe 8:  Einkaufslisten-Filter.")

function filterEinkaufslist(arr) {
  let geradePreis = [];
  for (let i = 0; i < arr.length; i++) {
if (arr[i] <= 10 && arr[i] % 2 == 0 ) {
  geradePreis[i] = arr[i];
  }
  // else {console.log("Es gibt keinen Preis unter 10 und keinen geraden Preis.")}
}
console.log(geradePreis.filter(n => n));
}

filterEinkaufslist([8, 1, 2, 3, 4, 6, 12,20]); // ausgeben [ 8, 2, 4, 6 ]


console.log("Aufgabe 9: Alter-Verifikationssystem")

function alterVerifikat(benutzern){
  return [benutzern.filter(c=>c.alter >= 18).map(c=>c.name), benutzern.filter(c=>c.alter >= 18).map(c=>c.alter)];  
};


 let benutzernList = [
    {name: 'Peter', alter: 18},
    {name: 'Anna', alter: 16},
    {name: 'Max', alter: 22}
];

// Test
console.log(alterVerifikat(benutzernList)); 
// ausgeben [ [ 'Peter', 'Max' ], [ 18, 22 ] ]  bitte brauche ich Hilfe


console.log("Aufgabe 10: Einfacher Palindrom-Checker für Usernamen.")

function userIsPalindrome(str) {
  str = str.toLowerCase();
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}

// Test
console.log(userIsPalindrome("Anna")); // ausgeben true




console.log("Aufgabe 11: Punktezähler.");

function punktezahler(punkte) {
  let sumPunkte = 0;
  
  for (let i = 0; i < punkte.length; i++) {
    sumPunkte += punkte[i];
  }
return console.log(sumPunkte);
}

punktezahler([10,20,30]);  // Ausgabe: 60


console.log("Aufgabe 12:  Filter für einzigartige Produkte.")

function einzigartigeProdukte(array) {
 
const unique = [];
const count = {};

for (let i = 0; i<array.length; ++i) {
  let value = array[i];
  count[value] = (count[value] || 0) + 1;
}

for (let i = 0; i<array.length; ++i) {
  let value = array[i];
  if (count[value] == 1) {
    unique.push(value);
  }  
}
return (console.log(unique)); 
}

const array = ["T-Shirt", "Hose", "T-Shirt", "Mütze"];
einzigartigeProdukte(array);
// Ausgabe: ["Hose", "Mütze"]


console.log("Aufgabe 13: Katalogstruktur-Ebenen zählen.")

let countInArray = function (inputArr, test) {
  //track the count
  let count = 0;

  const search = (arr, test) => {
    //iterate the array
    for (let a of arr) {
      //if not an array
      //test the element
      //if it passes the test, store its result
      if (test(a)) {
        count += 1;
      }

      //if sub-array
      if (Array.isArray(a)) {
        //recursively filter the sub-array
        search(a, test);
      }
    }
  };
  //search
  search(inputArr, test);

  //return
  return count;
};

const arr = [{Kleidung: {Herren: {Hosen: {}, Hemden: {}}, Damen: {Kleider: {}, Röcke: {}}}}];
const count = countInArray(arr, (e) => typeof e === "string");
console.log(count);
// Ausgabe: 0
// bitte helfe 

// Eingabe: {Kleidung: {Herren: {Hosen: {}, Hemden: {}}, Damen: {Kleider: {}, Röcke: {}}}}
// Ausgabe: 3


console.log("Aufgabe 14: Besucherzählung für Veranstaltungen.")

function besucherzahlung(arr, min, max) {
  
let countVisitor = 0; 

function inRange (x) {
  return this[0] <= x && x <= this[1];
}
countVisitor = arr.filter(inRange, [min, max]).length
console.log(countVisitor)
}

// Test
besucherzahlung([22, 34, 15, 17, 18, 45], 18, 35); 
// Ausgabe: 3






