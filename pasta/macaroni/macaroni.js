const body = document.getElementById("whole");
const input1 = document.getElementById("plate-input");
const input2 = document.getElementById("time-input")
const button = document.getElementById("btn");
const foodName = document.getElementById("title");
const price = document.getElementById("price");
const delivey = document.getElementById("delivery");
const designGreet = document.getElementById("designPlate");
const designPlate = document.getElementById("correctPlate");
const designTime = document.getElementById("designNotifyTime");
const displayTime = document.getElementById("showTime");
const fixedImage = document.getElementById("large-image");
const fixedName = document.getElementById("name");
const introPlate = document.getElementById("plate-title");
const introTime = document.getElementById("time-heading");

let greet = `Dear Customer, you've just ordered`;
let plate = ` plate of macaroni <hr class="notify-line">`;
let notifyTime = `It would be delivered at`;

function setCard() {
    const message = document.querySelector("#message");
    const notification = document.createElement("div");
    notification.classList.add("card");

    const actions  = document.createElement("div")
    const removeButton = document.createElement("button");

    actions.classList.add("actions")
    removeButton.classList.add("remove");

    removeButton.innerHTML = `<img src="../../images/socials/delete.png">`;
    
    designGreet.innerHTML = `<h3 class="greet"> ${greet} </h3>`;
    designPlate.innerHTML = `<h2> ${input1.value += plate} </h2>`;
    designTime.innerHTML = `<h3 class="designTime"> ${notifyTime} </h3>`;
    displayTime.innerHTML = `<h2> ${input2.value} </h2>`;

    actions.appendChild(removeButton);
    notification.appendChild(designGreet);
    notification.appendChild(designPlate);
    notification.appendChild(designTime);
    notification.appendChild(displayTime);
    notification.appendChild(actions);
    message.appendChild(notification);

    button.style.backgroundImage = "linear-gradient(to top, #6d45099d, #976a099a)";
    button.style.boxShadow = "1px 10px 55px #976a099a";
    
    input1.value = "";
    input2.value = "";
    
    introPlate.style.color = "#47474771";
    introTime.style.color = "#47474771";
    fixedName.style.color = "#47474771"
    input1.style.opacity = "0.2";
    input2.style.opacity = "0.2";
    fixedImage.style.opacity = "0.5";
    body.style.backgroundColor = "#adadad";
    foodName.style.color = "white";
    price.style.color = "white";
    delivey.style.color = "white";

    removeButton.addEventListener("click", removefunc);
}

function removefunc() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode;

    parent.removeChild(notification);

    button.style.backgroundImage = "linear-gradient(to top, #bd7408, #f1ae1c)";

    introPlate.style.color = "black";
    introTime.style.color = "black";
    fixedName.style.color = "black"
    input1.style.opacity = "1";
    input2.style.opacity = "1";
    fixedImage.style.opacity = "1";
    body.style.backgroundColor = "#fff"
    foodName.style.color = "black"
    price.style.color = "rgb(100, 55, 19)"
    delivey.style.color = "rgb(100, 55, 19)"
}

function setConditionForCard() {
    if (input1.value.length > 0 && input2.value.length > 0) {
        setCard();
    }else if (input2.value.length <= 0) {
        alert("enter some values ...");
    }else{
        alert("please enter some values ...")
    }

    input1.value = "";
    input2.value = "";
}

button.addEventListener("click", setConditionForCard)
