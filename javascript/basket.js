// je veux faire apparaître les articles dans le panier
let products = [];
let productItems = localStorage.getItem("addProductsInBasket");
productItems = JSON.parse(productItems);
products.push(productItems);

function displayProductsBasket() {
    const divOne = document.querySelector(".div-products");
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
                selectRecap.setAttribute("class", "dropdown-recap recap");
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

                const divThree = document.createElement('div');
                divThree.setAttribute("class", "input-quantity");
                divTwo.appendChild(divThree);

                const input = document.createElement('input');
                input.setAttribute("class", "quantity");
                input.setAttribute("type", "text");
                input.setAttribute("value", `${data.quantity}`);
                divThree.appendChild(input);

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

    localStorage.setItem("total", total);
}
totalPrice()

function removeProducts(value) {
    let productsStorage = localStorage.getItem('article');
    productsStorage = parseInt(productsStorage);

    const remove = document.querySelectorAll(".remove-product");
    Array.from(remove).forEach((button) => {
       button.addEventListener('click', () => {
        const index = products.indexOf(value);

        if(products[index] === localStorage[index]) {
            products.splice(index, 1);
            localStorage.setItem("article", JSON.stringify(productsStorage - 1));
            document.location.reload();
        }

        localStorage.setItem("addProductsInBasket", JSON.stringify(products));
    }); 
    })
    
       
    console.log(products)
}
removeProducts()
