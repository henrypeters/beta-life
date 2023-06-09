const menuBar = document.getElementById("menu-btn");
const designLink1 = document.getElementById("link1");
const designLink2 = document.getElementById("link2");
const designLinkTag = document.getElementById("linkHolder");
const fixedImage = document.getElementById("large-image");
const designCloseButton = document.getElementById("closeButton");
const textBody = document.getElementById("text");

function addLinkMenu() {
    const navigationMessage = document.querySelector("#navMessage");
    const linkCard = document.createElement("div");
    linkCard.classList.add("navlist");

    fixedImage.style.display = "none";

    let link1 = `Home`;
    let link2 = `Collection`;

    designLink1.innerHTML = `<div><a href="../../index.html" class="linkTag">${link1}</a></div>`;
    designLink2.innerHTML = `<div><a href="../../collection.html" class="linkTag">${link2}</a></div>`;

    menuBar.style.display = "none";
    designCloseButton.style.display = "block";
    textBody.style.marginTop = "350px";

    designLinkTag.appendChild(designLink1);
    designLinkTag.appendChild(designLink2);
    linkCard.appendChild(designLinkTag);
    navigationMessage.appendChild(linkCard);
}

menuBar.addEventListener("click", addLinkMenu)