let products = [];

function appelAPI() {
    fetch(`http://localhost:3000/api/cameras`)

    // je prends une reponse et je la convertis en json
    .then((response) => {
        return response.json(); 
    })

    // je sélectionne la donnée sur l'API du navigateur
    .then((data) => {  
    // console.log(products[0][0].name);
        console.log(data);
        products.push(data)

    // je créé une boucle qui va itérer les données que je souhaite intégrer dans le html
        for(let i = 0; i < products.length ; i++) {
            const divOne = document.querySelector(".container-articles");

            const divTwo = document.createElement("div");
            divTwo.className = "article";

            const img = document.createElement("img");
            divTwo.appendChild(img);
            img.setAttribute("src", `./images/vcam_${i + 1}.jpg`);
            
            const divThree = document.createElement("div");
            divThree.className = "article-flex-name-price";

            divOne.appendChild(divTwo);
            divTwo.appendChild(divThree);

            const title = document.createElement("h3");
            title.className = "name-article";
            title[i].innerHTML = products[0][i].name;
            divThree.appendChild(title);

            const price = document.createElement("p");
            price.className = "price-article";
            price[i].innerHTML = `${products[0][i].price} €`;
            divThree.appendChild(price);

            const description = document.createElement("p");
            description.className = "description-article";
            description[i].innerHTML = products[0][i].description;
            divTwo.appendChild(description);
        };
    })
    .catch ( error => {
        console.log(error);
    })
}
appelAPI();

