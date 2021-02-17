// je veux afficher le produit de l'id selectionné
const link = window.location.search;
const id = link.replace("?id=", "");
// console.log(id)

function displayOwnProduct() {
    fetch(`http://localhost:3000/api/cameras/${id}`)

    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return Error("Error");
        }
    })
    .then((data) => {
        // console.log(data[0].lenses[1]);

        for(let i = 0; i < data.length; i++){
            const h2 = document.querySelector("h2");
            h2.innerText = data[i].name;
        }
        
    })
    .catch(error => {
        console.log(error);
    })
}

displayOwnProduct();