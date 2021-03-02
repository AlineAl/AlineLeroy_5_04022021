/* fetch(`http://localhost:3000/api/cameras/order`), {
    method: "POST",
    headers: {
        'Accept': 'app/json',
        'Content-Type': 'app/json'
    }, 
    body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        email: email
    })
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return Error("Error");
        }
    })

    .then((data) => {
        console.log(data)
    })

    .catch(error => {
        console.log(error);
    })
} */