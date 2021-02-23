// je veux faire apparaître les articles dans le panier

function displayProductsBasket() {
    let products = [];
    let productItems = localStorage.getItem("addProductsInBasket");
    productItems = JSON.parse(localStorage.getItem("addProductsInBasket"));

    const divOne = document.querySelector(".container-basket");
    // console.log(products);

    if (productItems) {
        products.push(productItems);
        console.log(products)
        products.forEach(product => {
            product = Object.values(productItems);
            product.map(data => {
                const divTwo = document.createElement("div");
                divTwo.setAttribute("class", "article-panier")
                divOne.prepend(divTwo);
        
                const img = document.createElement("img");
                img.setAttribute("src", `${data.imageUrl}`);
                divTwo.appendChild(img);
        
                const divThree = document.createElement("div");
                divTwo.appendChild(divThree);
        
                const h3 = document.createElement("h3");
                divThree.appendChild(h3);
                const name = document.querySelector("h3");
                name.innerText = data.name;
        
                const pDescription = document.createElement("p");
                divThree.appendChild(pDescription);
                const description = document.querySelector("p");
                description.innerText = data.description;
        
                const pPrice = document.createElement("p");
                pPrice.setAttribute("id", "bold-price");
                divThree.appendChild(pPrice);
                const price = document.querySelector("#bold-price");
                price.innerText = `${data.price} €`;
        
                const select = document.createElement("select");
                select.setAttribute("class", "dropdown-basket");
                select.setAttribute("name", "products");
                select.setAttribute("id", "products");
                divThree.appendChild(select);
            });
        }) 
    };
}

displayProductsBasket()
