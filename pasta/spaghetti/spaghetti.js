// const plateInput = document.getElementById("plate-input");
// const numPlate = document.getElementById("num-plate");
// const button  = document.getElementById("btn");

// let singleName = " Plate"
// let pluralName = " Plates"

// function getPlateNum(value) {
//     if (plateInput.value > 1) {
//         return value += pluralName;
//     }else if (plateInput.value <= 1) {
//         return value += singleName;
//     }else if (plateInput.value === 0) {
//         return 0;
//     }
// }

// function getAnswer() {
//     numPlate.textContent = getPlateNum(Number.parseInt(plateInput.value, 10));
// }

// plateInput.addEventListener("keyup", getAnswer);

// button.addEventListener("click", function() {
    
// })


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
let plate = ` plate of spaghetti <hr class="notify-line">`;
let notifyTime = `It would be delivered at`;

function setCard() {
    const message = document.querySelector("#message");
    const notification = document.createElement("div");
    notification.classList.add("card");

    const actions  = document.createElement("div")
    const removeButton = document.createElement("button");
    const moreInfo = document.createElement("div");

    actions.classList.add("actions");
    removeButton.classList.add("remove");
    moreInfo.classList.add("agree");

    removeButton.innerHTML = `<img src="../../images/socials/delete.png">`;
    moreInfo.innerHTML = `<h4> Got It </h4>`
    
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
    notification.appendChild(moreInfo)
    message.appendChild(notification);

    button.style.backgroundImage = "linear-gradient(to top, #6d45099d, #976a099a)";
    button.style.boxShadow = "1px 10px 55px #adadad";
    button.style.opacity = "0.5";
    
    input1.value = "";
    input2.value = "";
    
    // introPlate.style.color = "#47474771";
    // introTime.style.color = "#47474771";
    // fixedName.style.color = "#47474771"
    // input1.style.opacity = "0.2";
    // input2.style.opacity = "0.2";
    // fixedImage.style.opacity = "0.5";
    // body.style.backgroundColor = "#adadad";
    // foodName.style.color = "white";
    // price.style.color = "white";
    // delivey.style.color = "white";

    introPlate.style.display = "none";
    introTime.style.display = "none";
    fixedName.style.color = "#47474771"
    input1.style.display = "none";
    input2.style.display = "none";
    fixedImage.style.opacity = "0.5";
    body.style.backgroundColor = "#adadad";
    foodName.style.display = "none";
    price.style.display = "none";
    delivey.style.display = "none";
    button.style.marginTop = "300px"

    removeButton.addEventListener("click", removeFunc);
    moreInfo.addEventListener("click", infoFunc);
}

function infoFunc() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode;

    parent.removeChild(notification);
}

function removeFunc() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode;

    parent.removeChild(notification);

    button.style.backgroundImage = "linear-gradient(to top, #bd7408, #f1ae1c)";
    button.style.opacity = "1"

    introPlate.style.display = "block"
    introPlate.style.color = "black";
    // 
    introTime.style.display = "block"
    introTime.style.color = "black";
    // 
    fixedName.style.color = "black"
    // 
    input1.style.display = "block"
    input1.style.marginTop = "-29px"
    input1.style.marginLeft = "93px"
    input1.style.opacity = "1";
    // 
    input2.style.display = "block"
    input2.style.opacity = "1";
    // 
    fixedImage.style.opacity = "1";
    // 
    body.style.backgroundColor = "#fff"
    // 
    foodName.style.display = "block"
    foodName.style.color = "black"
    // 
    price.style.display = "block"
    price.style.color = "rgb(100, 55, 19)"
    // 
    delivey.style.display = "block"
    delivey.style.color = "rgb(100, 55, 19)"
    // 
    button.style.marginTop = "19px"
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
