// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".


const itemInput = document.getElementById("item");
const btn = document.getElementById("btn-aggiungi");
const lista = document.getElementById("lista");
const err = document.getElementById("errore");

let items = [];

function aggiungiElementi(){
    err.textContent = "";
    if(itemInput.value === ""){
        err.textContent = "Inserire valore adeguato";
        return;
    }
    
    items.push(itemInput.value.trim());
    renderizzaItems();

    itemInput.value = "";
}

function renderizzaItems() {
    // svuota la lista HTML
    lista.innerHTML = "";

    // per ogni elemento nell'array items
    // chiamiamo la funzione creaItem
    // e aggiungiamo l'item HTML alla pagina
    for (let i=0; i<items.length; i++) {
        const nuovoItem = creaItem(items[i]);
        lista.append(nuovoItem);
    }
}

function creaItem(contenuto) {
    const nuovoItem = document.createElement("li");
    nuovoItem.textContent = contenuto;

    nuovoItem.addEventListener("click", () => {
        // se ha la classe "done", la toglie
        // se non ce l'ha la aggiunge
        nuovoItem.classList.toggle("done");
    });

    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "X";
    nuovoItem.append(btnRimuovi);
    btnRimuovi.addEventListener("click", () => {
        // trovo l'indice dell'elemento da cancellare
        const indice = items.findIndex(x => x === contenuto);
        if (indice >= 0) {
            // elimino elemento alla posizione indice
            items.splice(indice, 1);
            // aggiorno gli items
            renderizzaItems();
        }
    });

    return nuovoItem;
}

btn.addEventListener("click", aggiungiElementi);