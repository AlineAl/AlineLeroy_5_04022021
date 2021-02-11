let resultatsAPI;

function appelAPI(id, name, price, description, image) {

    fetch(`http://localhost:3000/api/cameras`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        resultatsAPI = data;
        console.log(data); 
    })
}