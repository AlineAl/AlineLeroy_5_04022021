// Récupération des données
const orderId = JSON.parse(localStorage.getItem("orderId"));
const total = JSON.parse(localStorage.getItem("total"));

// Affichage des données sur la page de confirmation
const div = document.querySelector('div');

if(total === null && orderId === null) {

    const pNull = document.createElement('p');
    pNull.setAttribute("class", "p-null");
    pNull.innerText = `Votre panier est vide 😅`;
    div.prepend(pNull);
    
} else {

    const h2 = document.createElement("h2");
    h2.innerText = "Félicitations ! 🥳"
    div.appendChild(h2);

    const pTotal = document.createElement('p');
    pTotal.setAttribute("class", "p-total-order");
    pTotal.innerText = `Nous vous remercions pour votre commande d'un total de ${total} €`;
    div.appendChild(pTotal);

    const pOrderId = document.createElement('p');
    pOrderId.setAttribute("class", "p-order-id");
    pOrderId.innerText = `Voici votre numéro de commande: ${orderId}`;
    div.appendChild(pOrderId);

    localStorage.clear(); 
}

