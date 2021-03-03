// form valide ou invalide
const inputUserFirst = document.querySelector(".form-user:nth-child(1) input");
const inputUserLast = document.querySelector(".form-user:nth-child(2) input");
const inputAddress = document.querySelector(".form-user:nth-child(3) input");
const inputCity = document.querySelector(".form-user:nth-child(4) input");
const inputMail = document.querySelector(".form-user:nth-child(5) input");
const imgVerif = document.querySelectorAll(".check-icon-img");
const span = document.querySelectorAll("span");

inputUserFirst.addEventListener("input", (e) => {
    if(e.target.value.length >= 3) {
        imgVerif[0].style.display = "inline";
        imgVerif[0].src = "./images/check.png";
        span[0].style.display= "none";
    } else {
        imgVerif[0].style.display = "inline";
        imgVerif[0].src = "./images/error.png";
        span[0].style.display= "inline";
    }
})

inputUserLast.addEventListener("input", (e) => {
    if(e.target.value.length >= 3) {
        imgVerif[1].style.display = "inline";
        imgVerif[1].src = "./images/check.png";
        span[1].style.display= "none";
    } else {
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


// Je fetch post les données utilisateurs
const myForm = document.querySelector("#myForm");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log("yo");
    // contact (information de contact) / product (id des products en string)
    // requête order = renvoie un order id généré
    const formData = new FormData(this);
    const params = new URLSearchParams();

    fetch("http://localhost:3000/api/order", {
        method: "POST",
        body: params
    })

    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return Error("Error");
        }
    })

    .then((data) => {
        console.log(data);
    })

    .catch(error => {
        console.log(error);
    })
})
