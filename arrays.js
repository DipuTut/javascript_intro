var tiere = ["Katze", "Hund"];
console.log(tiere);

console.log(tiere[1]);
tiere.push("Kaninchen");
console.log(tiere);

// Das letzte Element aus dem Arry entfernen
var result = tiere.pop();
console.log(result);
console.log(tiere);

// Das erste Element aus dem Arry entfernen
var first_element = tiere.shift();
console.log(first_element);
console.log(tiere);

delete tiere[0];
console.log(tiere);

var tiere2 = ["Katze", "Hund", "Maus"];
var deleted_element = tiere2.splice(1,1);
console.log(deleted_element);
console.log(tiere2);

var myNumbers = [1, 2, 3, 4, 5];
var deleted_numbers = myNumbers.splice(1,3);
console.log(deleted_numbers);
console.log(myNumbers);

var tiere3 = ["Katze", "Hund", "Maus"];
tiere3.forEach(tier => console.log(tier));

var myNumbers2 = [1, 2, 3, 4, 5];
myNumbers2.forEach(num => console.log(num *2));

var tiere4 = ["Katze", "Hund", "Maus"];
tiere4.forEach(tier => console.log(tier));
var hund = tiere4.find(tier => tier === "Loewe");
console.log(hund);


