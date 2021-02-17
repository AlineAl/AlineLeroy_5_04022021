// je veux afficher le produit de l'id selectionné
const link = window.location.search;
const params = new URLSearchParams(link);
const id = params.get('id');
// console.log(id)

// je veux les infos liées à cet id
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

        function displayInfoProduct(data) {
            const div = document.querySelector(".container-produit")

            const img = document.createElement("img");
            img.setAttribute("src", `${data.imageUrl}`)
            div.prepend(img);

            const title = document.querySelector("h2");
            title.innerText = data.name;

            const description = document.querySelector("#description");
            description.innerText = data.description;

            const price = document.querySelector("#bold-price");
            price.innerText = `${data.price} €`;

            for(let i = 0; i < data.lenses.length; i++) {
                const select = document.querySelector("select");

                const option = document.createElement("option");
                option.innerText = data.lenses[i];
                select.appendChild(option);
            }
        }
        displayInfoProduct(data);
        
    })
    .catch(error => {
        console.log(error);
    })
}

displayOwnProduct();