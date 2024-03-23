
console.log("Aufgabe 1: Finden und Entfernen.")
function entferneElement(arr, wert) {
     var i = 0;
   while (i < arr.length) {
     if (arr[i] == wert) {
       arr.splice(i, 1);
     } else {
       ++i;
     }
   }
   return arr;
   }
  
  // Test
   console.log(entferneElement([1,2,4,3,5,4], 4));
  //node ha3.js ausgeben [ 1, 2, 3, 5 ]


 console.log("Aufgabe 2: Summe aller Zahlen.")
function summeZahlen(arr) {
  const summe = arr.reduce((akkumulator, aktuelleZahl) => akkumulator + aktuelleZahl, 0);
  return summe;
}

// Test
console.log(summeZahlen([1, 2, 3, 4, 7])); 
// ausgeben 17


console.log("Aufgabe 3: Duplikate Filtern.")
function entferneDuplikate(arr) { 
        return arr.filter(function(item, pos) {
           return arr.indexOf(item) == pos;
      })
}

// Test
console.log(entferneDuplikate([1, 2, 2, 5, 4, 4, 3])); 
// ausgeben [1, 2, 5, 4, 3]



console.log("Aufgabe 4: Überprüfung der Jahreszeit.")
function bestimmeJahreszeit(monat) {
  
    if (monat == 12 || monat == 1 || monat == 2) {
        return "Winter";
    } else if (monat == 3 || monat == 4 || monat == 5) {
        return "Frühling";
    }
    else if (monat == 6 || monat == 7 || monat == 8) {
        return "Sommer";
    }
    else if (monat == 9 || monat == 10 || monat == 11) {
        return "Herbst";
    } else  {
        return "Ungültiger Monat";
    }
}

// Test
console.log(bestimmeJahreszeit(Number(9))); 
// ausgeben Herbst


console.log("Aufgabe 5: Passwort-Validierung.")
// Quelle: https://www.w3resource.com/javascript/form/password-validation.php

function istPasswortGueltig(passwort) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(passwort.match(passw)) 
    { 
    return true;
    }
    else
    { 
    return false;
    }
}

// Test
console.log(istPasswortGueltig("Test1234")); 
// ausgeben true


console.log("Aufgabe 6: Einfacher Taschenrechner.")

function taschenrechner(a, b, operation) {
  
  if(operation == "+")
  { 
    return a+b; 
  }
  else if (operation == "-")
  { 
  return a-b;
  }
  else if (operation == "*")
  { 
  return a*b;
  }
  else if (operation == "/")
  { 
  return a/b;
  }
  else 
  { 
  return "Ungültige Operation";
  }

}

// Test
console.log(taschenrechner(10, 5, "+")); // ausgeben 15
console.log(taschenrechner(10, 5, "-")); // ausgeben 5
console.log(taschenrechner(10, 5, "/")); // ausgeben 2
console.log(taschenrechner(10, 5, "x")); // ausgeben "Ungültige Operation"


console.log("Aufgabe 7: Multiplikationstabelle.")

function multiplikationstabelle(n) {
 for ( var i = 1; i <=10; i++) {
  m = n * i;
 console.log(m); 
}
}

// Test
console.log(multiplikationstabelle(5)); // Sollte die Multiplikationstabelle für 5 ausgeben


console.log("Aufgabe 8: Array-Umkehrung")

function umkehrenArray(arr) {
    let newArr=[];
    for (let i=arr.length-1; i>=0; i--) {
       newArr.push(arr[i]);
    }
    return newArr;
  }

// Test
console.log(umkehrenArray([1, 2, 3, 4, 5])); // ausgeben [5, 4, 3, 2, 1] 


console.log("Aufgabe 9: Zählen von Buchstaben.")

function zaehleBuchstaben(str, buchstabe) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === buchstabe) {
      count++;
    }
  }
  return count;
}

// Test
console.log(zaehleBuchstaben("Hallo Welt", "l")); // ausgeben 3
console.log(zaehleBuchstaben("HaLLoo WeLt", "l")); // leider funktioniert nicht 



console.log("Aufgabe 10: Finde gerade Zahlen.")

function filterGeradeZahlen(arr) {
  let geradeZahlen = [];
  for (let i = 0; i < arr.length; i++) {
    geradeZahlen = arr.filter(x => x % 2 == 0);
  }
  return geradeZahlen;
}

// Test
console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6])); //ausgeben [2, 4, 6]


console.log("Aufgabe 11: Minimale und maximale Zahl finden.")

function findeMinMax(arr) {
  let minNum = Infinity;
  let maxNum = -Infinity;
  
  for (let item of arr) {
    if (item < minNum)
    minNum = item;
                
    if (item > maxNum)
    maxNum = item; 
  }
    return { min:minNum, max:maxNum }; 
}

// Test
console.log(findeMinMax([10, 2, 5, 1, 9])); // ausgeben { min: 1, max: 10 }


console.log("Aufgabe 12: Durchschnittsberechnung.")

function berechneDurchschnitt(arr) {
  let summe = 0;

  for (let i = 0; i < arr.length; i++) {
    summe += arr[i]; 
  }
  return summe / arr.length; 
}

// Test
console.log(berechneDurchschnitt([1, 2, 3, 4, 5])); // ausgeben 3 