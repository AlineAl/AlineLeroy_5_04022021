// Récupération des données du localStorage(products)

let productsBasket = [];
let productItems = localStorage.getItem("addProductsInBasket");
productItems = JSON.parse(productItems);
productsBasket.push(productItems);

// form valide ou invalide
function verifValidInput() {
    const userForm = document.querySelector("#my-form");
    const inputUserFirst = document.querySelector(".form-user:nth-child(1) input");
    const inputUserLast = document.querySelector(".form-user:nth-child(2) input");
    const inputAddress = document.querySelector(".form-user:nth-child(3) input");
    const inputCity = document.querySelector(".form-user:nth-child(4) input");
    const inputMail = document.querySelector(".form-user:nth-child(5) input");
    const imgVerif = document.querySelectorAll(".check-icon-img");
    const span = document.querySelectorAll("span");

    inputUserFirst.addEventListener("input", (e) => {
        const regexFirstName = /^[a-zA-Zàâäéèêëçùûüôö]+[-']?[a-zA-Zàâäéèêëçùûüôö]+$/;

        if(e.target.value.search(regexFirstName) === 0) {
            imgVerif[0].style.display = "inline";
            imgVerif[0].src = "./images/check.png";
            span[0].style.display= "none";
        } else if(e.target.value.search(regexFirstName) === -1) {
            imgVerif[0].style.display = "inline";
            imgVerif[0].src = "./images/error.png";
            span[0].style.display= "inline";
        }
    })

    inputUserLast.addEventListener("input", (e) => {
        const regexLastName = /^[a-zA-Zàâäéèêëçùûüôö]+[-']?[a-zA-Zàâäéèêëçùûüôö]+$/;

        if(e.target.value.search(regexLastName) === 0) {
            imgVerif[1].style.display = "inline";
            imgVerif[1].src = "./images/check.png";
            span[1].style.display= "none";
        } else if(e.target.value.search(regexLastName) === -1){
            imgVerif[1].style.display = "inline";
            imgVerif[1].src = "./images/error.png";
            span[1].style.display= "inline";
        }
    })

    inputAddress.addEventListener("input", (e) => {
        const regexAddress = /([0-9]*) ?([a-zA-Z,\. ]*) ?([0-9]{5}) ?([a-zA-Z]*)/;

        if(e.target.value.search(regexAddress) === 0) {
            imgVerif[2].style.display = "inline";
            imgVerif[2].src = "./images/check.png";
            span[2].style.display= "none";
        } else if(e.target.value.search(regexAddress) === -1) {
            imgVerif[2].style.display = "inline";
            imgVerif[2].src = "./images/error.png";
            span[2].style.display= "inline";
        }
    })

    inputCity.addEventListener("input", (e) => {
        const regexCity = /^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$/;

        if(e.target.value.search(regexCity) === 0) {
            imgVerif[3].style.display = "inline";
            imgVerif[3].src = "./images/check.png";
            span[3].style.display= "none";
        } else if(e.target.value.search(regexCity) === -1) {
            imgVerif[3].style.display = "inline";
            imgVerif[3].src = "./images/error.png";
            span[3].style.display= "inline";
        }
    })

    inputMail.addEventListener("input", (e) => {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(e.target.value.search(regexEmail) === 0) {
            imgVerif[4].style.display = "inline";
            imgVerif[4].src = "./images/check.png";
            span[4].style.display= "none";
        } else if(e.target.value.search(regexEmail) === -1) {
            imgVerif[4].style.display = "inline";
            imgVerif[4].src = "./images/error.png";
            span[4].style.display= "inline";
        }
    })

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const regexAddress = /([0-9]*) ?([a-zA-Z,\. ]*) ?([0-9]{5}) ?([a-zA-Z]*)/;
        const regexCity = /^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$/;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(inputUserFirst.value.length < 3) {
            e.preventDefault();
        } else if(inputUserLast.value.length < 3) {
            e.preventDefault();
        } else if(inputAddress.value.search(regexAddress) === -1) {
            e.preventDefault();
        } else if(inputCity.value.search(regexCity) === -1) {
            e.preventDefault();
        } else if(inputMail.value.search(regexEmail) === -1) {
            e.preventDefault();
        } else {
            requestPost();
        }
    })  
}
verifValidInput()

// Je fetch post les données utilisateurs
// contact (information de contact) / product (id des products en string)
// requête order = renvoie un order id généré
function requestPost() {
    // const userForm = document.querySelector("#my-form");

    // userForm.addEventListener('submit', (e) => {
        // e.preventDefault();

        let contact = {
            firstName: document.querySelector('#firstname').value,
            lastName: document.querySelector('#lastname').value,
            address: document.querySelector('#address').value,
            city: document.querySelector('#city').value,
            email: document.querySelector('#email').value
        }
        
        // console.log(contact);
        let products = [];

        productsBasket = productsBasket[0];
        for(let i = 0; i < productsBasket.length; i++) {
            products.push(productsBasket[i].object._id);  
        }

        // console.log(product_id);

        const form = {contact, products};
        // console.log(form);

        fetch('http://localhost:3000/api/cameras/order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        .then((response) => {
            return response.json();
            
        })

        .then((data) => {
            localStorage.setItem("contact", JSON.stringify(form));
            localStorage.setItem("orderId", JSON.stringify(data.orderId));
            console.log(form);
            console.log(data.orderId);
            window.location.href=`./order.html?orderid=${data.orderId}`;
        })

        .catch(error => {
            console.log(error);
        }) 
    // })
}
