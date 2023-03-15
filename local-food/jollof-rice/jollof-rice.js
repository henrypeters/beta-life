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

let greet = `Dear Customer, you've just ordered`;
let plate = ` plate of jollof rice <hr class="spag-line">`;
let notifyTime = `It would be delivered at`

button.addEventListener("click", function() {
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
    
    input1.value = "";
    input2.value = "";
    
    foodName.style.color = "white"
    price.style.color = "white"
    delivey.style.color = "white"

    removeButton.addEventListener("click", removefunc);
})

function removefunc() {
    const notification = this.parentNode.parentNode
    const parent = notification.parentNode;

    parent.removeChild(notification);

    foodName.style.color = "black"
    price.style.color = "rgb(100, 55, 19)"
    delivey.style.color = "rgb(100, 55, 19)"
}