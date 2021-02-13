const nameArticle = document.querySelectorAll('.name-article');
const priceArticle = document.querySelectorAll('.price-article');
const descriptionArticle = document.querySelectorAll('.description-article');
const imgArticle = document.querySelectorAll('.img-article');
const clickCard = document.querySelectorAll('.link-card');

function appelAPI() {
    fetch(`http://localhost:3000/api/cameras`)

    // je prends une reponse et je la convertis en json
    .then((reponse) => {
        return reponse.json()
    })

    // je sélectionne la donnée sur l'API du navigateur
    .then((data) => {
    console.log(data);
    // console.log(data[0].name);

    // je créé une boucle qui va itérer les données que je souhaite intégrer dans le html
        for(let i = 0; i < 5; i++) {
            imgArticle[i].src = `./images/vcam_${i + 1}.jpg`;
            nameArticle[i].innerHTML = data[i].name;
            priceArticle[i].innerHTML = `${data[i].price} €`;
            descriptionArticle[i].innerHTML = data[i].description;
            // console.log(nameArticle)

            // Quand l'utilisateur clique sur article, il accède à la page de celui-ci
            clickCard[i].addEventListener('click', (e) => {
                e.preventDefault();
    
                clickCard[i].innerHTML = `http://localhost:3000/api/cameras/:${data[i]._id}`;
                // console.log(e);
            })
        }
    });
}
appelAPI();






