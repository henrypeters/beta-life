const username = document.getElementById("name");
const password = document.getElementById("password");
const firstbutton = document.getElementById("firstBtn")
const formContainer = document.getElementById("form-card")

function eventAfterFirstBtnClick() {
    if (username.value.length > 0 && password.value.length > 0 ) {
        firstbutton.style.display = "none";

        const secondButton = document.createElement("div");
        secondButton.classList.add("secondBtn");

        secondButton.innerHTML = `<a href="collection.html"><button> Welcome </button></a>`;

        formContainer.appendChild(secondButton);
    }else{

        alert("Wrong username and password")

        username.value = "";
        password.value = "";
    }
}