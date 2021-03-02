const myForm = document.querySelector("#myForm");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log("yo");
    const formData = new FormData(this);
    const params = new URLSearchParams();

    fetch("http://localhost:3000/api/cameras", {
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
