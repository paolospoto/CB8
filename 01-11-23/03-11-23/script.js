// DEFINISCO UNA FUNZIONE CHE SEPARA I VARI CONSOLE.LOG PER UNA QUESTIONE DI VISIBILITà

function putSeparator() {
    console.log("------") 
}

// PRIMO ESERCIZIO 

// DEFINISCO LA FUNZIONE 

function getTemperatureStatus(temperature) {
    if (temperature < 10) {
        return "freddo"
    } else if (temperature >= 10 && temperature < 20) {
        return "mite"
    } else if (temperature >= 20) {
        return "caldo"
    } else {
        return "L'argomento della funzione deve essere un numero!"
    }
}

// CONSOLE LOG DEL VALORE CHE LA FUNZIONE ASSUME

console.log(getTemperatureStatus(5)) // FREDDO
putSeparator();

console.log(getTemperatureStatus(-5)) // FREDDO - FUNZIONA ANCHE CON UN VALORE NEGATIVO
putSeparator();

console.log(getTemperatureStatus(10)) // MITE
putSeparator();

console.log(getTemperatureStatus(20)) // CALDO
putSeparator();

console.log(getTemperatureStatus("dieci")) // L'ARGOMENTO NON è UN NUMERO
putSeparator();

// SECONDO ESERCIZIO

// DEFINISCO UN OGGETTO, 5 PROPRIETà E UN METODO 

const person = {
    name: "Paolo",
    surname: "Spoto",
    age: 21,
    city: "Palermo",
    job: "developer",
    presentation: function() {
        console.log("Ciao, mi chiamo", this.name, this.surname, "ho", this.age, "anni, abito a", this.city, "e sono un", this.job);
    }
};


// INVOCO IL METODO DEFINITO PRECEDENTEMENTE 

person.presentation()
putSeparator();


// TERZO ESERCIZIO 

// DEFINISCO UN'ARRAY VUOTO 

const favoriteMovies = []

// DEFINISCO UNA FUNZIONE CHE AGGIUNGE UN ELEMENTO ALL'ARRAY 

function addToFav(movie) {
    favoriteMovies.push(movie);
}

// DEFINISCO UNA FUNZIONE CHE RIMUOVE UN ELEMENTO DALL'ARRAY 

function removeFromFav(movie) {
    const movieIndex = favoriteMovies.indexOf(movie); // CERCO E "CONSERVO" ALL'INTERNO DI UNA VARIABILE L'INDICE DELL'ELEMENTO CHE VOGLIO RIMUOVERE
    if (movieIndex != (-1)) {
        favoriteMovies.splice(movieIndex, 1); // SE L'ELEMENTO HA INDICE DIVERSO DA -1 (E QUINDI ESISTE ALL'INTERNO DELL'ARRAY) LO RIMUOVO CON SPLICE
    } else {
        console.log("ATTENZIONE: " + movie + " non è presente all'interno dell'array") // SE HA INDICE -1 (E QUINDI NON ESISTE ALL'INTERNO DELL'ARRAY) PARTE UN MESSAGGIO DI ERRORE
    }
}

// DEFINISCO UNA FUNZIONE CHE FA IL CONSOLE.LOG DI OGNI ELEMENTO DELL'ARRAY 

 function showFav() {
    for (let i = 0; i < favoriteMovies.length; i++) {
        console.log(i + ": " + favoriteMovies[i]);
      }
 }



addToFav("The Dark Knight");
addToFav("Mother!");
addToFav("Black Swan");
addToFav("Oppenheimer");
addToFav("The Green Mile");

showFav();
putSeparator();

removeFromFav("Mother!");

showFav();
putSeparator();


removeFromFav("Pokemon");

