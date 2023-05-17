const button = document.getElementById("callBtn");
const heading = document.getElementById("about-heading");
const firstIntro = document.getElementById("bold-intro");
const secondIntro = document.getElementById("small-intro");
const designContactHeading = document.getElementById("contactHeading");
const aboutImage = document.getElementById("aboutImg");

const designLocationContact = document.getElementById("locationContact");
const designPhoneContact = document.getElementById("phoneContact");
const designInternetContact = document.getElementById("internetContact");


function eventAfterContactClick() {
    const MesssageForContact = document.getElementById("contactMessage")
    const cardForContact = document.createElement("div");
    cardForContact.classList.add("contactCard");

    heading.style.display = "none";
    firstIntro.style.display = "none";
    secondIntro.style.display = "none";
    button.style.display = "none";
    aboutImage.style.opacity = "0.001";

    const action = document.createElement("div");
    action.classList.add("actions")
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    const contactHolder = document.createElement("div");
    contactHolder.classList.add("contactPlatformHolder");

    let contactHeading = `Contact Us`;
    let locationContact = `<img src="images/emoji/pointer.png"> 
                        <p>No 2 Nguru Road, Kaduna</p>`;
    let phoneContact = `<img src="images/emoji/telephone2.webp">
                        <p>08089282156, 09167293738</p>`;
    let internetContact = `<img src="images/emoji/internet.png">
                        <p>www.betaLife.com</p>`;

    designContactHeading.innerHTML = `<h3 class="contactTitle"> ${contactHeading} </h3>`;
    designLocationContact.innerHTML = `<div class="locationHolder"> ${locationContact} </div>`;
    designPhoneContact.innerHTML = `<div class="phoneHolder"> ${phoneContact} </div>`;
    designInternetContact.innerHTML = `<div class="internetHolder"> ${internetContact} </div>`;
    removeButton.innerHTML = `<img src="images/emoji/delete.png">`

    action.appendChild(removeButton);
    cardForContact.appendChild(designContactHeading);
    contactHolder.appendChild(designLocationContact);
    contactHolder.appendChild(designPhoneContact);
    contactHolder.appendChild(designInternetContact);
    cardForContact.appendChild(action);
    cardForContact.appendChild(contactHolder);
    MesssageForContact.appendChild(cardForContact);

    removeButton.addEventListener("click", removeFunc);
}

function removeFunc() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode;

    parent.removeChild(notification);

    heading.style.display = "block";
    firstIntro.style.display = "block";
    secondIntro.style.display = "block";
    button.style.display = "inline-block";
    aboutImage.style.opacity = "1";
}

button.addEventListener("click", eventAfterContactClick);