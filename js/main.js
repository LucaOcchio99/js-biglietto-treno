//Il programma dovrà chiedere all’utente il numero di
// chilometri che vuole percorrere e l’età del 
//passeggero.

//Sulla base di queste informazioni dovrà calcolare il 
//prezzo totale del viaggio, secondo queste regole:

//- il prezzo del biglietto è definito in base ai 
//km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va scritto in forma 
//umana (con massimo due decimali, per indicare 
//centesimi sul prezzo). 


//ottengo numero chilometri da percorrere
const numero_km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(`Il numero di chilometri percorsi dall\'utente sono: ${numero_km}`);

//ottengo l'eta del utente
const eta_utente = parseInt(prompt('Qual è la sua età?'));
console.log(`L'età dell\'utente è: ${eta_utente}`);

//prezzo pieno del biglietto 
const prezzo_pieno_biglietto = numero_km * 0.21;
console.log(`Il prezzo pieno del biglietto è di €${prezzo_pieno_biglietto.toFixed(2)}`);


// sconto minorenni
if (eta_utente < 18) {
   const prezzo_minorenne =  prezzo_pieno_biglietto - ((prezzo_pieno_biglietto/100)*20);
   console.log(`Essendo minorenne hai diritto ad uno sconto del 20%. Il prezzo del tuo biglietto è di: €${prezzo_minorenne.toFixed(2)}`);
// sconto over 65
} else if (eta_utente > 65) {
     const prezzo_over = prezzo_pieno_biglietto - ((prezzo_pieno_biglietto/100)*40);
     console.log(`Avendo un età superiore ai 65 ha diritto ad uno sconto del 40%. Il prezzo del suo biglietto è di: €${prezzo_over.toFixed(2)}`);
} else {
    console.log(`Non hai diritto a nessuno sconto. Il prezzo del biglietto è di: €${prezzo_pieno_biglietto.toFixed(2)}`);
}

