const username = document.getElementById("name");
const password = document.getElementById("password");
const firstbutton = document.getElementById("firstBtn");
const formContainer = document.getElementById("form-card");
const menuButton = document.getElementById("menu-btn"); 
const designLinkTag = document.getElementById("linkHolder");
const designCloseButton = document.getElementById("closeButton");

function eventAfterFirstBtnClick() {
    if (username.value.length > 0 && password.value.length > 0 ) {
        firstbutton.style.display = "none";

        const secondButton = document.createElement("div");
        secondButton.classList.add("secondBtn");

        secondButton.innerHTML = `<a href="collection.html"><button> Get Started </button></a>`;

        formContainer.appendChild(secondButton);
    }else{

        alert("Wrong username and password")

        username.value = "";
        password.value = "";
    }
}

const navigationMessage = document.querySelector("#navMessage");
const linkCard = document.createElement("div");
linkCard.classList.add("navlist");

function addLinkMenu() {
    let link1 = `Home`;
    let link2 = `Sign In`;

    designLinkTag.innerHTML = `<a href="index.html" class="linkTag">${link1}</a>
                            <a href="sign-in.html" class="linkTag">${link2}</a>`;

    linkCard.appendChild(designLinkTag);
    navigationMessage.appendChild(linkCard);

    toggleMenuImgToCloseImgFunction()
}

function toggleMenuImgToCloseImgFunction() {
    let closeButtonImg = `"images/emoji/delete.png"`;
    menuButton.style.display = "none"

    designCloseButton.innerHTML = `<a href="sign-up.html"><img src=${closeButtonImg} class="close-btn"></a>`;

}

menuButton.addEventListener("click", addLinkMenu);  