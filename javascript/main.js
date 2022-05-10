function appelAPI() {
    fetch(`http://localhost:3000/api/cameras`, {
        method: 'GET'
    })
    // je prends une reponse et je la convertis en json
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error("Error");
        }
    })

    // je sélectionne la donnée sur l'API du navigateur
    .then((data) => {  
        console.log(data);

    // je créé une boucle qui va itérer les données que je souhaite intégrer dans le html
        for(let i = 0; i < data.length ; i++) {
            const divOne = document.querySelector(".container-articles");

            const link = document.createElement("a");
            link.setAttribute("href", `./product.html?id=${data[i]._id}`)
            divOne.appendChild(link)
            
            const divTwo = document.createElement("div");
            divTwo.setAttribute("class", "article");
            divOne.appendChild(divTwo);
            link.appendChild(divTwo);

            const img = document.createElement("img");
            divTwo.appendChild(img);
            img.setAttribute("src", `${data[i].imageUrl}`);
    
            const divThree = document.createElement("div");
            divThree.setAttribute("class", "article-flex-name-price");
            divTwo.appendChild(divThree);

            const title = document.createElement("h3");
            title.setAttribute("class", "name-article");
            divThree.appendChild(title);
            const titleArticle = document.querySelectorAll(".name-article")
            titleArticle[i].innerHTML = data[i].name;
            
            const price = document.createElement("p");
            price.setAttribute("class", "price-article");
            divThree.appendChild(price);
            const priceArticle = document.querySelectorAll(".price-article")
            priceArticle[i].innerHTML = `${data[i].price / 100} €`;
            
            const description = document.createElement("p");
            description.setAttribute("class", "description-article");
            divTwo.appendChild(description);
            const descriptionArticle = document.querySelectorAll(".description-article")
            descriptionArticle[i].innerHTML = data[i].description;  
        };
    }) 
    .catch ( error => {
        console.log(error);
    }) 
}

appelAPI();
