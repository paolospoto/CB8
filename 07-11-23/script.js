const putSpacer = () => console.log("----------")

// ESERCIZIO 1

// DICHIARO LE ARROW FUNCTION DELLE 4 OPERAZIONI 

const sum = (firstNum, secondNum, thirdNum) => firstNum + secondNum + thirdNum;
const sub = (firstNum, secondNum, thirdNum) => firstNum - secondNum - thirdNum;
const mult = (firstNum, secondNum, thirdNum) => firstNum * secondNum * thirdNum;
const divi = (firstNum, secondNum, thirdNum) => firstNum / secondNum / thirdNum;

// DICHIARO UNA ARROW FUNCTION CHE ATTRAVERSO LA CALLBACK (PRENDENDO UNA FUNZIONE COME ARGOMENTO) RESTITUISCE IL VALORE DELLA FUNZIONE

const calculator = (fn) => {
    const firstNum = prompt('Inserire il primo numero'); // L'UTENTE INSERISCE I 3 VALORI ATTRAVERSO UN PROMPT
    const secondNum = prompt('Inserire il secondo numero');
    const thirdNum = prompt('Inserire il terzo numero');

    return fn(parseFloat(firstNum), parseFloat(secondNum), parseFloat(thirdNum)); // parseFloat CONVERTE LA STRINGA IN NUMERO PER POTER FARE LE OPERAZIONI MATEMATICHE
}

// ASSOCIO AI 4 BUTTON UNA OPERAZIONE CIASCUNO

document.addEventListener('DOMContentLoaded', function() { // IL SEGUENTE BLOCCO CODICE VERRà ESEGUITO SOLAMENTE UNA VOLTA CARICATA COMPLETAMENTE LA PAGINA DAL BROWSER (OVVERO L'EVENTO "DOMContentLoaded")
    let sumBtn = document.getElementById('sumBtn'); // DICHIARO LE VARIABILI DI RIFERIMENTO AI 4 BOTTONI ATTRAVERSO I LORO ID
    let subBtn = document.getElementById('subBtn');
    let multBtn = document.getElementById('multBtn');
    let diviBtn = document.getElementById('diviBtn');

sumBtn.addEventListener('click', function(){ // ALL'EVENTO "CLICK" PARTONO I PROMPT E VIENE ESEGUITO IL console.log DELLA FUNZIONE CORRISPONDENTE
    alert('Inserisci 3 valori e visualizza il risultato in console!')
    console.log(calculator(sum))
    
})
subBtn.addEventListener('click', function(){
    alert('Inserisci 3 valori e visualizza il risultato in console!')
    console.log(calculator(sub))
})
multBtn.addEventListener('click', function(){
    alert('Inserisci 3 valori e visualizza il risultato in console!')
    console.log(calculator(mult))
})
diviBtn.addEventListener('click', function(){
    alert('Inserisci 3 valori e visualizza il risultato in console!')
    const result = (calculator(divi))
    if (result === Infinity || isNaN(result)){ // NEL CASO DELLA DIVISIONE EVITO CHE SI DIVIDA PER 0 USANDO QUESTA CONDIZIONE
        console.log("Non è possibile dividere per 0!")
    } else {
        console.log(result) 
    }
})
})

// FINE PRIMO ESERCIZIO 

// ESERCIZIO 2

// CREO UN ARRAY DI OGGETTI

const cart = [
    {
       id: 2023001,
       name: "T-Shirt Nike",
       size: "XL",
       urlImg: "https://placehold.co/600x400",
       description: "100% cotone, Uomo"
    },
    {
        id: 2023002,
        name: "Felpa Jordan",
        size: "M",
        urlImg:"https://placehold.co/600x400",
        description: "Logo Ricamato a Mano, Uomo"
    },
    {
        id: 2023003,
        name: "Scarpe Adidas",
        size: 37,
        urlImg: "https://placehold.co/600x400",
        description: "Ecopelle, Donna"
    }
]

console.log("FOREACH:");

// ITERO SULL'ARRAY CON forEach PRIMA E CON map DOPO USANDO CONSOLE.LOG COME FUNZIONE CALLBACK

cart.forEach((item) => {
    console.log(item.name + " è disponibile!")
})

putSpacer()

console.log("MAP:");

cart.map((item) => {
    console.log(item.name + " è disponibile!")
})

putSpacer()

// NEL CASO PRECEDENTE LA DIFFERENZA TRA forEach E map NON è RILEVANTE, SE INVECE..

let cartAfterForEach = cart.forEach((item) => {
    return(item.name + " è disponibile!") // QUESTA RIGA VIENE IGNORATA
})

console.log(cartAfterForEach)

putSpacer()

let cartAfterMap = cart.map((item) => {
    return(item.name + " è disponibile!")
})

console.log(cartAfterMap)

putSpacer()

// SE UTILIZZO RETURN CON forEach, JS IGNORA LA RIGA 101 E RESTITUISCE UNDEFINED, 
// QUESTO PERCHè forEach SI UTILIZZA SOLO PER ITERARE E NON PUò RESTITUIRE UN VALORE DIVERSO DA UNDEFINED

// map, INVECE, RESTITUISCE UN NUOVO ARRAY DELLA STESSA LUNGHEZZA DELL'ARRAY ORIGINALE CONTENENTE GLI ELEMENTI RESTITUITI DALLA CALLBACK

// FINE SECONDO ESERCIZIO

// TERZO ESERCIZIO

// DEFINISCO DUE ARRAY DI NUMERI

array1 = [3, 6, 9, 12, 15, 18, 21]

array2 = [11, 22, 13, 45, 55, 70]

// DEFINISCO UNA FUNZIONE CHE LI TRASFORMA E LI FILTRA

const transformAndFilter = (firstArray, secondArray) => {
    const transformedFirstArray = firstArray.map((num) => num * 2) // L'ARRAY1 TRASFORMATO SARà UGUALE ALL'ARRAY ORIGINALE CON OGNI ELEMENTO MOLTIPLICATO PER 2 GRAZIE A map
    const transformedSecondArray = secondArray.map((num) => num + 5) // L'ARRAY2 TRASFORMATO SARà UGUALE ALL'ARRAY ORIGINALE CON OGNI ELEMENTO SOMMATO A 5 GRAZIE A map

    const filteredFirstArray = transformedFirstArray.filter((num) => num > 10) // L'ARRAY1 FILTRATO CONTERRà SOLO I NUMERI MAGGIORI DI 10
    const filteredSecondArray = transformedSecondArray.filter((num) => num % 2 === 0) // L'ARRAY2 FILTRATO CONTERRà SOLO I NUMERI PARI

    const excludedFirstArray = transformedFirstArray.filter((num) => num <= 10);
    const excludedSecondArray = transformedSecondArray.filter((num) => num % 2 !== 0);
    const excludedElementsArray = excludedFirstArray.concat(excludedSecondArray); // CREO ANCHE UN ARRAY PER GLI ESCLUSI (POVERINI)


    return {filteredFirstArray, filteredSecondArray, excludedElementsArray} // LA FUNZIONE RITORNA UN OGGETTO CHE CONTIENE I TRE ARRAY
}

console.log(transformAndFilter(array1, array2))

// FINE TERZO ESERCIZIO










