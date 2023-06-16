const menuBar = document.getElementById("menu-btn");
const designLink1 = document.getElementById("link1");
const designLink2 = document.getElementById("link2");
const designLink3 = document.getElementById("link3");
const designLinkTag = document.getElementById("linkHolder");
const designCloseButton = document.getElementById("closeButton");
const textBody = document.getElementById("picHolder");

function addLinkMenu() {
    const navigationMessage = document.querySelector("#navMessage");
    const linkCard = document.createElement("div");
    linkCard.classList.add("navlist");

    let link1 = `Home`;
    let link2 = `Collection`;
    let link3 = `Popcorn menu`

    designLink1.innerHTML = `<div><a href="../../index.html" class="linkTag">${link1}</a></div>`;
    designLink2.innerHTML = `<div><a href="../../collection.html" class="linkTag">${link2}</a></div>`;
    designLink3.innerHTML = `<div><a href="../pop-corn/popcorn.html" class="linkTag">${link3}</a></div>`;

    menuBar.style.display = "none";
    designCloseButton.style.display = "block";
    textBody.style.marginTop = "380px";

    designLinkTag.appendChild(designLink1);
    designLinkTag.appendChild(designLink2);
    designLinkTag.appendChild(designLink3);
    linkCard.appendChild(designLinkTag);
    navigationMessage.appendChild(linkCard);
}

menuBar.addEventListener("click", addLinkMenu)