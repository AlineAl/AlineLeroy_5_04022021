// Récupération des données
const orderId = JSON.parse(localStorage.getItem("orderId"));
const total = JSON.parse(localStorage.getItem("total"));

// Affichage des données sur la page de confirmation
const div = document.querySelector('div');

const pTotal = document.createElement('p');
pTotal.setAttribute("class", "p-total-order");
pTotal.innerText = `Nous vous remercions pour votre commande d'un total de ${total} €`;
div.appendChild(pTotal);

const pOrderId = document.createElement('p');
pOrderId.setAttribute("class", "p-order-id");
pOrderId.innerText = `Voici votre numéro de commande: ${orderId}`;
div.appendChild(pOrderId);

localStorage.clear();
