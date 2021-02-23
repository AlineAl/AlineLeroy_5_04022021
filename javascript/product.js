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

        // je prends les données de l'id
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

        // j'ajoute un événement au click de l'utilisateur

        function addProductInBasket() {
            let addProduct = document.querySelector(".add-product");
            
            addProduct.addEventListener('click', (e) => {
                e.preventDefault();

                cardProductsStorage(data);
            })
        }
        addProductInBasket();

        // ajout des articles dans le panier avec localStorage
        function cardProductsStorage(data) {
            // console.log(data);
            let productsStorage = localStorage.getItem('article');
            // console.log(productsStorage);
            // console.log(typeof(productsStorage));

            productsStorage = parseInt(productsStorage);
            // console.log(typeof(productsStorage));
            
            if (productsStorage) {
                localStorage.setItem('article', productsStorage + 1);
                let div = document.querySelector(".basket-products");

                let pRounded = document.createElement("p");
                pRounded.setAttribute("class", "number-products-basket");
                let p = document.createElement("p");
                p.setAttribute("class", "number");
                p.innerText = productsStorage += 1;

                div.appendChild(pRounded);
                div.appendChild(p);

            } else {
                localStorage.setItem('article', 1);
                let div = document.querySelector(".basket-products");

                let pRounded = document.createElement("p");
                pRounded.setAttribute("class", "number-products-basket");
                let p = document.createElement("p");
                p.setAttribute("class", "number");

                div.appendChild(pRounded);
                div.appendChild(p);

                document.querySelector(".number").innerText = 1;
            }

            setItems(data);
        }

        function setItems(data) {
            let products = [];
            let productItems = localStorage.getItem("addProductsInBasket");
            productItems = JSON.parse(productItems);
            productItems = {
                [data.name]: data
            }

            if (productItems === null) {
                products = [];
            } else {
                localStorage.setItem("addProductsInBasket", JSON.stringify(productItems));
                products.push(productItems);
                console.log(products);
            } 
        }
        // je veux que le nombre d'articles ne soit pas réinitialisé à chaque démarrage de la page  
    })
    .catch(error => {
        console.log(error);
    })
}

displayOwnProduct();


