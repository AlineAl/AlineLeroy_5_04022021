function displayOwnProduct() {
    fetch(`http://localhost:3000/api/cameras`)

    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return Error("Error");
        }
    })
    .then((data) => {
        console.log(data[0].lenses[1]);
    })
}

displayOwnProduct();