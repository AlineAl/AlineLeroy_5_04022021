// je veux faire apparaître les articles dans le panier
let products = [];
let productItems = localStorage.getItem("addProductsInBasket");
productItems = JSON.parse(productItems);
products.push(productItems);

function displayProductsBasket() {
    const divOne = document.querySelector(".container-basket");
    // console.log(products);

    if (productItems) {
        // console.log(products)
        products.forEach(product => {
            product = Object.values(productItems);
            product.map(data => {
                const divTwo = document.createElement("div");
                divTwo.setAttribute("class", "article-panier")
                divOne.prepend(divTwo);
        
                const img = document.createElement("img");
                img.setAttribute("src", `${data.object.imageUrl}`);
                divTwo.appendChild(img);

                const h3 = document.createElement("h3");
                divTwo.appendChild(h3);
                const name = document.querySelector("h3");
                name.innerText = data.object.name;

                const selectRecap = document.createElement("select");
                selectRecap.setAttribute("class", "dropdown recap");
                selectRecap.setAttribute("name", "products");
                selectRecap.setAttribute("id", "products")
                divTwo.appendChild(selectRecap);

                for(let i = 0; i < data.object.lenses.length; i++) {
                    const selectOption = document.querySelector(".recap");
                    
                    const option = document.createElement("option");
                    option.innerText = data.object.lenses[i];
                    selectOption.appendChild(option);
                }

                const pPrice = document.createElement("p");
                pPrice.setAttribute("id", "bold-price-basket");
                divTwo.appendChild(pPrice);
                const price = document.querySelector("#bold-price-basket");
                price.innerText = `${data.object.price / 100} €`;

                /* const inputNumber = document.createElement("input");
                inputNumber.setAttribute("class", "number-input");
                inputNumber.setAttribute("type", "number");
                inputNumber.setAttribute("min", "1");
                divTwo.appendChild(inputNumber); */

                const remove = document.createElement("i");
                remove.setAttribute("class","fas fa-trash-alt remove-product");
                divTwo.appendChild(remove);
            });
        }) 
    };
}

displayProductsBasket()

function totalPrice() {
    let total = 0;
    products = products[0];
    for(let i = 0; i < products.length; i++){
        let price = products[i].object.price / 100;
        total += price * products[i].quantity;
    }

    const cardTotal = document.querySelector(".total-card");
    cardTotal.innerText = `${total} €`;
    // console.log(total)

    const cardProduct = document.querySelector(".total-product");
    cardProduct.innerText = products.length;
    // console.log(products.length)
}
totalPrice()

function removeProducts(id) {
    const remove = document.querySelector(".remove-product");
    remove.addEventListener('click', (e) => {
        e.preventDefault();

        products = products[0];
        for(let i = 0; i < products.length; i++){
            if(products[i] === localStorage[i]) {
                localStorage[i].removeItem("addProductsInBasket", products)   
            }    
        } 
        console.log(products) 
    })
}
// removeProducts()

function displayForm() {
    const button = document.querySelector("button");

    button.addEventListener("click", (e) => {
        e.preventDefault();

        const divOne = document.querySelector(".container-basket");

        divOne.innerHTML = `
        <form action="" method="post">
            <label for="firstname">firstname:</label>
            <input id="firstname" name="firstname" type="text">
            <label for="lastname">lastname:</label>
            <input id="lastname" name="lastname" type="text">
            <label for="address">address:</label>
            <input id="address" name="address" type="text">
            <label for="city">city:</label>
            <input id="city" name="city" type="text">
            <label for="email">email:</label>
            <input id="email" name="email" type="text">
            <input type="submit" value="Valider ma commande"
        </form>
        `
    })
}
displayForm()



