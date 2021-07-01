/*
 Il programma dovrà chiedere all'utente il numero di chilometri 
 che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
 secondo queste regole:

1) il prezzo del biglietto è definito in base ai km (0.21 € al km);
2) va applicato uno sconto del 20% per i minorenni;
3) va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va stampato in forma umana (con massimo due decimali,
     per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */
const unity = 0.21;
var distance = parseInt(prompt("Quanti chilometri devi percorrere?: "));
var age = parseInt(prompt(" Inserire l'età: "));
var price;


// write on html
var pDistance = document.getElementById('distance').innerText = distance;
var pAge = document.getElementById('age').innerText = age;
var total = document.getElementById('total');
// validation nan
if (isNaN(distance) || isNaN(age)) {
    alert("errore inserimento -- NaN");
    console.error("errore: distanza: ", distance);
    console.error("errore: eta: ", age);

    //reset value 
    distance = 0;
    eta = 0;
}
//validation distance
if (distance < 0) {
    alert("errore inserimento distanza");
    console.error("errore:  distanza: ", distance);
    //reset value 
    distance = 0;
}

//validation age
if (age < 0 || age > 110) {
    alert("errore inserimento anni");
    console.error("errore: età: ", age);
    //reset value 

    eta = 0;
}

//debug inline
console.log("distanza: " + distance, typeof distance);
console.log("età: ", age, typeof distance);

//multiply unity and distance input user;
price = unity * distance;

//debug inline
console.log("imponibile: ", price, typeof price);

//discount under 18
if (age < 18) {
    price -= ((price * 20) / 100);
} else if (age >= 65) {        //discount over 65
    price -= ((price * 40) / 100);
}

//debug inline
console.log("il prezzo totale è :", price, typeof price);

//ensure 2 digit after units

total.innerText = parseFloat(price).toFixed(2);
