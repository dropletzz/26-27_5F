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

function aggiungiElementi(){
    err.textContent = "";
    if(itemInput.value === ""){
        err.textContent = "Inserire valore adeguato";
        return;
    }
    
    const nuovoItem = document.createElement("li");
    nuovoItem.textContent = itemInput.value;

    nuovoItem.addEventListener("click", () => {
        // se ha la classe "done", la toglie
        // se non ce l'ha la aggiunge
        nuovoItem.classList.toggle("done");

        /* e' equivalente a 
        if (nuovoItem.classList.contains("done")) {
            nuovoItem.classList.remove("done");
        }
        else {
            nuovoItem.classList.add("done");
        }
        */
    });

    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "X";
    nuovoItem.append(btnRimuovi);
    btnRimuovi.addEventListener("click", () => {
        nuovoItem.remove();
    });

    lista.append(nuovoItem);
    itemInput.value = "";
}

btn.addEventListener("click", aggiungiElementi);