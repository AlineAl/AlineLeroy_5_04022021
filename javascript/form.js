function displayForm() {
    const button = document.querySelector("button");

    button.addEventListener("click", (e) => {
        e.preventDefault();

        const divOne = document.querySelector(".container-basket");

        divOne.innerHTML = `
        <form action="" method="post">
            <label for="firstname">firstname:</label>
            <input id="firstname" name="firstname" type="text">
            <label for="lastname">lastname:</label>
            <input id="lastname" name="lastname" type="text">
            <label for="address">address:</label>
            <input id="address" name="address" type="text">
            <label for="city">city:</label>
            <input id="city" name="city" type="text">
            <label for="email">email:</label>
            <input id="email" name="email" type="text">
            <input type="submit" value="Valider ma commande"
        </form>
        `
    })
}
displayForm()