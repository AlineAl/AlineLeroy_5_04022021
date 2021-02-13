const nameArticle = document.querySelectorAll('.name-article');
const priceArticle = document.querySelectorAll('.price-article');
const descriptionArticle = document.querySelectorAll('.description-article');
const imgArticle = document.querySelectorAll('.img-article');


fetch(`http://localhost:3000/api/cameras`)
.then((reponse) => {
    return reponse.json()
})
.then((data) => {
    // console.log(data);

    for(let i = 0; i < 5; i++) {
        imgArticle[i].src = `./images/vcam_${i + 1}.jpg`;
        nameArticle[i].innerHTML = data[i].name;
        priceArticle[i].innerHTML = `${data[i].price} €`;
        descriptionArticle[i].innerHTML = data[i].description;
        // console.log(nameArticle)
    }
});