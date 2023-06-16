const body = document.getElementById("whole");
const input1 = document.getElementById("plate-input");
const input2 = document.getElementById("time-input")
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const foodName = document.getElementById("title");
const price = document.getElementById("price");
const delivey = document.getElementById("delivery");

const menuBar = document.getElementById("menu-btn");
const designLink1 = document.getElementById("link1");
const designLink2 = document.getElementById("link2");
const designLinkTag = document.getElementById("linkHolder");
const designCloseButton = document.getElementById("closeButton");
const textBody = document.getElementById("text");
const plateInputReadonly = document.getElementById("plates");
const timeInputReadonly = document.getElementById("time");

const listHolder = document.getElementById("li-holder")
const menuHolder = document.getElementById("menuBarHolder");
const designGreet = document.getElementById("designPlate");
const designPlate = document.getElementById("correctPlate");
const designTime = document.getElementById("designNotifyTime");
const displayTime = document.getElementById("showTime");
const desginPayment = document.getElementById("payText");
const displayPayment = document.getElementById("showPayment");
const showPaymentPlatform = document.getElementById("titlePaymentPlatform");
const introductionToPaymentPlatform = document.getElementById("introToPaymentPlatforms");
const bigImagePlatform = document.getElementById("displayBigPaymentPlatformImage");
const showSmallPic1 = document.getElementById("displaySmallPic1");
const showSmallPic2 = document.getElementById("displaySmallPic2");
const showSmallPic3 = document.getElementById("displaySmallPic3");
const showSmallPic4 = document.getElementById("displaySmallPic4");
const showSmallPic5 = document.getElementById("displaySmallPic5");
const designRequestTitle = document.getElementById("requestTitle");
const ratingsContainer = document.getElementById("rating-container");
const happyButton = document.getElementById("happyBtn");
const neutralButton = document.getElementById("neutralBtn");
const unhappyButton = document.getElementById("unhappyBtn");
const fixedImage = document.getElementById("large-image");
const fixedName = document.getElementById("name");
const introPlate = document.getElementById("plate-title");
const introTime = document.getElementById("time-heading");



/////////////////////////////// 

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

    plateInputReadonly.innerHTML = `<strong id="plate-title">Plates:</strong> 
                                    <input type="text" placeholder="number of plates" id="plate-input" readonly>`;
    timeInputReadonly.innerHTML = `<h2 id="time-heading">Time to be delivered</h2>
                                    <input type="time" id="time-input" readonly>`;

    designLinkTag.appendChild(designLink1);
    designLinkTag.appendChild(designLink2);
    linkCard.appendChild(designLinkTag);
    navigationMessage.appendChild(linkCard);
}

menuBar.addEventListener("click", addLinkMenu)

///////////////////////////////



const moreInfo = document.createElement("div");
moreInfo.classList.add("continue");
moreInfo.innerHTML = `<h4> <button> Continue </button> </h4>`;

const recheck = document.createElement("div")
recheck.classList.add("recheck");
recheck.innerHTML = `<a href="chapman.html"><button> Recheck my order </button></a>`;

function setCardMinimal() {
    const message2 = document.querySelector("#minimalMessage");
    const notification = document.createElement("div");
    notification.classList.add("card");

    let greet = `Dear Customer, you've just ordered`;
    let plate = ` bottle of chapman <hr class="notify-line">`;
    let notifyTime = `It would be delivered at`;
    let paymentText = ` Your payment is`
    let paying = functionForPayment(Number.parseInt(input1.value, 10));
    let logicForNumPlate = functionForNumberOfPlate(Number.parseInt(input1.value, 10));
    let naira = `₦ `;

    const actions  = document.createElement("div");
    const btnHolder = document.createElement("div");
    const removeButton = document.createElement("button");

    actions.classList.add("actions");
    btnHolder.classList.add("button-holder")
    removeButton.classList.add("remove");
    
    removeButton.innerHTML = `<a href="chapman.html"><img src="../../images/socials/delete.png"></a>`;
    
    menuHolder.innerHTML = `<img src="../../images/emoji/menu.png" class="inactiveMenu">`;
    designGreet.innerHTML = `<h3 class="greet"> ${greet} </h3>`;
    designPlate.innerHTML = `<h2> ${logicForNumPlate += plate} </h2>`;
    designTime.innerHTML = `<h3 class="designTime"> ${notifyTime} </h3>`;
    displayTime.innerHTML = `<h2> ${input2.value} </h2> <hr class="notify-line">`;
    desginPayment.innerHTML = `<h3 class="intro-amount"> ${paymentText} </h3>`;
    displayPayment.innerHTML = `<h3 class="payConfirmation"> ${naira += paying} </h3>`

    actions.appendChild(removeButton);
    notification.appendChild(designGreet);
    notification.appendChild(designPlate);
    notification.appendChild(designTime);
    notification.appendChild(displayTime);
    notification.appendChild(desginPayment);
    notification.appendChild(displayPayment);
    notification.appendChild(actions);
    btnHolder.appendChild(moreInfo);
    btnHolder.appendChild(recheck);
    notification.appendChild(btnHolder)
    message2.appendChild(notification);
    
    input1.value = "";
    input2.value = "";

    introPlate.style.display = "none";
    introTime.style.display = "none";
    fixedName.style.color = "#47474771"
    input1.style.display = "none";
    input2.style.display = "none";
    fixedImage.style.display = "none";
    body.style.backgroundColor = "#adadad";
    foodName.style.display = "none";
    price.style.display = "none";
    delivey.style.display = "none";
    button2.style.display = "none"

    moreInfo.addEventListener("click", continueFunction);
}

function setCard() {
    const message = document.querySelector("#message");
    const notification = document.createElement("div");
    notification.classList.add("card");

    let greet = `Dear Customer, you've just ordered`;
    let plate = ` bottle of chapman <hr class="notify-line">`;
    let notifyTime = `It would be delivered at`;
    let paymentText = ` Your payment is`
    let paying = functionForPayment(Number.parseInt(input1.value, 10));
    let logicForNumPlate = functionForNumberOfPlate(Number.parseInt(input1.value, 10));
    let naira = `₦ `;

    const actions  = document.createElement("div");
    const btnHolder = document.createElement("div");
    const removeButton = document.createElement("button");


    actions.classList.add("actions");
    btnHolder.classList.add("button-holder")
    removeButton.classList.add("remove");
    
    removeButton.innerHTML = `<a href="chapman.html"><img src="../../images/socials/delete.png"></a>`;
    
    listHolder.innerHTML = `<li><a class="readonlyLink">Home</a></li>
                            <li><a class="readonlyLink">Collection</a></li>`;
    designGreet.innerHTML = `<h3 class="greet"> ${greet} </h3>`;
    designPlate.innerHTML = `<h2> ${logicForNumPlate += plate} </h2>`;
    designTime.innerHTML = `<h3 class="designTime"> ${notifyTime} </h3>`;
    displayTime.innerHTML = `<h2> ${input2.value} </h2> <hr class="notify-line">`;
    desginPayment.innerHTML = `<h3 class="intro-amount"> ${paymentText} </h3>`;
    displayPayment.innerHTML = `<h3 class="payConfirmation"> ${naira += paying} </h3>`

    actions.appendChild(removeButton);
    notification.appendChild(designGreet);
    notification.appendChild(designPlate);
    notification.appendChild(designTime);
    notification.appendChild(displayTime);
    notification.appendChild(desginPayment);
    notification.appendChild(displayPayment);
    notification.appendChild(actions);
    btnHolder.appendChild(moreInfo);
    btnHolder.appendChild(recheck);
    notification.appendChild(btnHolder)
    message.appendChild(notification);
    
    input1.value = "";
    input2.value = "";

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
    button.style.display = "none"

    moreInfo.addEventListener("click", continueFunction);
}

function functionForNumberOfPlate() {
    if (input1.value > 0) {
        return input1.value;
    }else{
        return 0;
    }
}

function functionForPayment(value) {
    if(input1.value > 0) {
        return value*(250+150);
    }else{ 
        moreInfo.style.display = "none";
        recheck.classList.toggle("recheck-active");

        return 0;
    }
}

function continueFunction() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const paymentPlatformMessage = document.getElementById("paymentPlatform");
    const platformCard = document.createElement("div");
    platformCard.classList.add("paymentCard");

    const smallimgWrapper = document.createElement("div");
    smallimgWrapper.classList.add("smallPicHolder");

    const confirmPaymentButton = document.createElement("div");
    confirmPaymentButton.classList.add("buttonForComfirmPayment");

    confirmPaymentButton.innerHTML = `<h4> Paid </h4>`;

    let yourPaymentPlatform = `Your Payment Platform`;
    let introToPlatforms = `You can choose to pay through the following platforms`;
    let bigImg = `"../../images/background/FlutterWave2.png"`;
    let smallpic1 = `"../../images/background/FlutterWave2.png"`;
    let smallPic2 = `"../../images/background/paystack.png"`;
    let smallPic3 = `"../../images/background/piggyVest2.png"`;
    let smallPic4 = `"../../images/background/moniepoint2.png"`;
    let smallPic5 = `"../../images/background/OPay2.webp"`;

    showPaymentPlatform.innerHTML = `<h3> ${yourPaymentPlatform} </h3>`;
    introductionToPaymentPlatform.innerHTML = `<h3> ${introToPlatforms} </h3>`;
    bigImagePlatform.innerHTML = `<img id="bigPhoto" src=${bigImg}>`;
    showSmallPic1.innerHTML = `<img id="smallPhotowave" src=${smallpic1}>`;
    showSmallPic2.innerHTML = `<img id="smallPhoto" src=${smallPic2}>`;
    showSmallPic3.innerHTML = `<img id="smallPhotopigy" src=${smallPic3}>`;
    showSmallPic4.innerHTML = `<img id="smallPhotoM" src=${smallPic4}>`;
    showSmallPic5.innerHTML = `<img id="smallPhoto" src=${smallPic5}>`;

    platformCard.appendChild(showPaymentPlatform);
    platformCard.appendChild(introductionToPaymentPlatform);
    platformCard.appendChild(bigImagePlatform);
    smallimgWrapper.appendChild(showSmallPic1);
    smallimgWrapper.appendChild(showSmallPic2);
    smallimgWrapper.appendChild(showSmallPic3);
    smallimgWrapper.appendChild(showSmallPic4);
    smallimgWrapper.appendChild(showSmallPic5);
    platformCard.appendChild(smallimgWrapper);
    platformCard.appendChild(confirmPaymentButton)

    paymentPlatformMessage.appendChild(platformCard);

    showSmallPic2.addEventListener("click", payStackFunction);
    showSmallPic3.addEventListener("click", piggyVestFunction);
    showSmallPic4.addEventListener("click", moniepointFunction)
    showSmallPic5.addEventListener("click", opayFunction);
    confirmPaymentButton.addEventListener("click", requestFunction);
}

function requestFunction() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const requestPlatformMessage = document.getElementById("requestPlatform");
    const cardForRequest = document.createElement("div");
    cardForRequest.classList.add("requestCard");

    let requestTitle = `How Satisfied Are You With Our Customer Support Performance?`;
    let smileyFace = `"../../images/emoji/smile_emoji(big).png"`;
    let neutralFace = `"../../images/emoji/neutral_emoji(big).png"`;
    let sadFace = `"../../images/emoji/unamused.png"`;

    designRequestTitle.innerHTML = `<h3 class="titleForRquest"> ${requestTitle} </h3>`;

    happyButton.innerHTML = `<button class="rating-btn" id="happy">
                                <img src=${smileyFace} alt="">
                                <p> Happy </p>
                            </button>`;
    neutralButton.innerHTML = `<button class="rating-btn" id="neutral">
                                    <img src=${neutralFace} alt="">
                                    <p> Neutral </p>
                                </button>`;
    unhappyButton.innerHTML = `<button class="rating-btn" id="unhappy">
                                    <img src=${sadFace} alt="">
                                    <p> Unhappy </p>
                                </button>`;

    cardForRequest.appendChild(designRequestTitle);
    ratingsContainer.appendChild(happyButton);
    ratingsContainer.appendChild(neutralButton);
    ratingsContainer.appendChild(unhappyButton);
    cardForRequest.appendChild(ratingsContainer);
    requestPlatformMessage.appendChild(cardForRequest);

    fixedImage.style.display= "none";
    fixedName.style.display = "none"

    happyButton.addEventListener("click", happyMessageReply)

    neutralButton.addEventListener("click", neutralMessageReply)

    unhappyButton.addEventListener("click", unhappyMassageReply);
}

function happyMessageReply() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const happyReplyMessage = document.getElementById("happyReply");
    const cardForRequestHappy = document.createElement("div");
    cardForRequestHappy.classList.add("happyReplyCard");

    const designTitleForHappy = document.getElementById("happyFirstTitle");
    const designHappyGreet = document.getElementById("greetForHappy");
    const designResponse = document.getElementById("responseForHappy");
    const designThanksReply = document.getElementById("thanksReply");
    const designConclude = document.getElementById("conclude");

    const acceptReply = document.createElement("div");
    acceptReply.classList.add("acceptReplyBtn");
    
    let happyReplyTitle = `How Satisfied Are You With Our Customer Support Performance ?`;
    let happyGreet = `Hello there,`;
    let response = `Your feedback says that you're happy with your our customer service.`;
    let thank = `Thanks alot 😃`;
    let conclude = `We'll continue to bring you the best of our service and product.`;

    designTitleForHappy.innerHTML = `<h3 class="titleForHappy"> ${happyReplyTitle} </h3>`;
    designHappyGreet.innerHTML  = `<h3 class="greetingHappy"> ${happyGreet} </h3>`;
    designResponse.innerHTML = `<h3 class="happyResponse"> ${response} </h3>`;
    designThanksReply.innerHTML = `<h3 class="thanks-reply"> ${thank} </h3>`;
    designConclude.innerHTML = `<h3 class="conclude-reply"> ${conclude} </h3>`;
    acceptReply.innerHTML = `<a href="../../collection.html"><button> OK </button></a>`;

    cardForRequestHappy.appendChild(designTitleForHappy)
    cardForRequestHappy.appendChild(designHappyGreet);
    cardForRequestHappy.appendChild(designResponse);
    cardForRequestHappy.appendChild(designThanksReply);
    cardForRequestHappy.appendChild(designConclude);
    cardForRequestHappy.appendChild(acceptReply);
    happyReplyMessage.appendChild(cardForRequestHappy);
}

function neutralMessageReply() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const neutralReplyMessage = document.getElementById("neutralReply");
    const cardForRequestNeutral = document.createElement("div");
    cardForRequestNeutral.classList.add("neutralReplyCard");

    const designTitleForNeutral = document.getElementById("neutralFirstTitle");
    const designGreetForNeutral = document.getElementById("greetForNeutral");
    const designTrackForNeutral = document.getElementById("trackForNeutral");
    const designFinalResponseForNeutral = document.getElementById("finalResponseForNeutral");

    const acceptReply = document.createElement("div");
    acceptReply.classList.add("acceptReplyBtn");

    let neutralReplyTitle = `How Satisfied Are You With Our Customer Support Performance ?`;
    let greetForNeutral = `Hello there,`;
    let trackForNeutral = `Your feedback says that you're neutral with our customer service 😐`;
    let finalResponse = `We'll use your feedback to improve our customer support`;

    designTitleForNeutral.innerHTML = `<h3 class="titleForNeutral"> ${neutralReplyTitle} </h3>`;
    designGreetForNeutral.innerHTML = `<h3 class="greetingNeutral"> ${greetForNeutral} </h3>`;
    designTrackForNeutral.innerHTML = `<h3 class="trackNeutral"> ${trackForNeutral} </h3>`;
    designFinalResponseForNeutral.innerHTML = `<h3 class="neutralFinalResponse"> ${finalResponse} </h3>`;
    acceptReply.innerHTML = `<a href="../../collection.html"><button> OK </button></a>`;

    cardForRequestNeutral.appendChild(designTitleForNeutral);
    cardForRequestNeutral.appendChild(designGreetForNeutral);
    cardForRequestNeutral.appendChild(designTrackForNeutral);
    cardForRequestNeutral.appendChild(designFinalResponseForNeutral);
    cardForRequestNeutral.appendChild(acceptReply);
    neutralReplyMessage.appendChild(cardForRequestNeutral);
}

function unhappyMassageReply() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const unhappyReplyMessage = document.getElementById("unhappyReply");
    const cardForRequest = document.createElement("div");
    cardForRequest.classList.add("unhappyReplyCard"); //check the class--Its not thesame with requestFuntion()'s own.
    
    let unhappyReplyTitle = `How Satisfied Are You With Our Customer Support Performance ?`;
    let greet = `Hello there,`;
    let problemTrack = `Your feedback says that you're unhappy with our customer service`;
    let finder = `What was your challenge ?`;
    let challengeOption1 = `POOR DELIVERY SERVICE`;
    let challengeOption2 = `POOR QUALITY OF FOOD`;
    
    const designTitleForUnhappy = document.getElementById("unhappyFirstTitle");
    const designGreet = document.getElementById("greetForUnhappy");
    const designProblemTrack = document.getElementById("unhappyProblemTrack");
    const designFinder = document.getElementById("findChallenge");
    const designChallenge1 = document.getElementById("challenge1");
    const designChallenge2 = document.getElementById("challenge2");
    
    designGreet.innerHTML = `<h3 class="greetForUnhappy"> ${greet} </h3>`;
    designProblemTrack.innerHTML = `<h3 class="trackProblem"> ${problemTrack} </h3>`;
    designFinder.innerHTML = `<h3 class="findOutChallenge"> ${finder} </h3>`;
    designChallenge1.innerHTML = `<h3 class="challengeOpt1"> ${challengeOption1} </h3>`;
    designChallenge2.innerHTML = `<h3 class="challengeOpt2"> ${challengeOption2} </h3>`;
    designTitleForUnhappy.innerHTML = `<h3 class="titleForUnhappy"> ${unhappyReplyTitle} </h3>`;
    
    cardForRequest.appendChild(designTitleForUnhappy)
    cardForRequest.appendChild(designGreet);
    cardForRequest.appendChild(designProblemTrack);
    cardForRequest.appendChild(designFinder);
    cardForRequest.appendChild(designChallenge1);
    cardForRequest.appendChild(designChallenge2);
    unhappyReplyMessage.appendChild(cardForRequest);

    designChallenge1.addEventListener("click", function() {
        designGreet.style.display = "none";
        designProblemTrack.style.display = "none";
        designFinder.style.display = "none";
        designChallenge1.style.display = "none";
        designChallenge2.style.display = "none";

        const designApology = document.getElementById("apologying");
        const designImprovement = document.getElementById("improvememt"); 
        const acceptReply = document.createElement("div");
        acceptReply.classList.add("acceptReplyBtn");

        let apology = `So sorry about that 😟`;
        let improvememt = `We would try our best to improve our delivery services`;

        designApology.innerHTML = `<h3 class="apology"> ${apology} </h3>`;
        designImprovement.innerHTML = `<h4 class="improvement"> ${improvememt} </h4>`;
        acceptReply.innerHTML = `<a href="../../collection.html"><button> OK </button></a>`;

        cardForRequest.appendChild(designApology);
        cardForRequest.appendChild(designImprovement)
        cardForRequest.appendChild(acceptReply)
    })

    designChallenge2.addEventListener("click", function() {
        designGreet.style.display = "none";
        designProblemTrack.style.display = "none";
        designFinder.style.display = "none";
        designChallenge1.style.display = "none";
        designChallenge2.style.display = "none";

        const designApology = document.getElementById("apologying");
        const designImprovement = document.getElementById("improvememt"); 
        const acceptApology = document.createElement("div");
        acceptApology.classList.add("acceptReplyBtn");

        let apology = `So sorry about that 😟`;
        let improvememt = `We would try our best to improve our quality`;

        designApology.innerHTML = `<h3 class="apology"> ${apology} </h3>`;
        designImprovement.innerHTML = `<h4 class="improvement"> ${improvememt} </h4>`;
        acceptApology.innerHTML = `<a href="../../collection.html"><button> OK </button></a>`;

        cardForRequest.appendChild(designApology);
        cardForRequest.appendChild(designImprovement)
        cardForRequest.appendChild(acceptApology)
    })
}

function payStackFunction() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const paymentPlatformMessage = document.getElementById("paymentPlatform");
    const platformCard = document.createElement("div");
    platformCard.classList.add("paymentCard");

    const smallimgWrapper = document.createElement("div") ;
    smallimgWrapper.classList.add("smallPicHolder");

    const confirmPaymentButton = document.createElement("div");
    confirmPaymentButton.classList.add("buttonForComfirmPayment");

    confirmPaymentButton.innerHTML = `<h4> Paid </h4>`;

    let yourPaymentPlatform = `Your Payment Platform`;
    let introToPlatforms = `You can choose to pay through the following platforms`;
    let bigImg = `"../../images/background/paystack.png"`;
    let smallpic1 = `"../../images/background/FlutterWave2.png"`;
    let smallPic2 = `"../../images/background/paystack.png"`;
    let smallPic3 = `"../../images/background/piggyVest2.png"`;
    let smallPic4 = `"../../images/background/moniepoint2.png"`;
    let smallPic5 = `"../../images/background/OPay2.webp"`;

    showPaymentPlatform.innerHTML = `<h3> ${yourPaymentPlatform} </h3>`;
    introductionToPaymentPlatform.innerHTML = `<h3> ${introToPlatforms} </h3>`;
    bigImagePlatform.innerHTML = `<img id="bigPhoto" src=${bigImg}>`;
    showSmallPic1.innerHTML = `<img id="smallPhotowave" src=${smallpic1}>`;
    showSmallPic2.innerHTML = `<img id="smallPhoto" src=${smallPic2}>`;
    showSmallPic3.innerHTML = `<img id="smallPhotopigy" src=${smallPic3}>`;
    showSmallPic4.innerHTML = `<img id="smallPhotoM" src=${smallPic4}>`;
    showSmallPic5.innerHTML = `<img id="smallPhoto" src=${smallPic5}>`;

    platformCard.appendChild(showPaymentPlatform);
    platformCard.appendChild(introductionToPaymentPlatform);
    platformCard.appendChild(bigImagePlatform);
    smallimgWrapper.appendChild(showSmallPic1);
    smallimgWrapper.appendChild(showSmallPic2);
    smallimgWrapper.appendChild(showSmallPic3);
    smallimgWrapper.appendChild(showSmallPic4);
    smallimgWrapper.appendChild(showSmallPic5);
    platformCard.appendChild(smallimgWrapper);
    platformCard.appendChild(confirmPaymentButton)

    paymentPlatformMessage.appendChild(platformCard);

    showSmallPic1.addEventListener("click", continueFunction);
    showSmallPic3.addEventListener("click", piggyVestFunction);
    showSmallPic4.addEventListener("click", moniepointFunction)
    showSmallPic5.addEventListener("click", opayFunction);
    confirmPaymentButton.addEventListener("click", requestFunction);
}

function piggyVestFunction() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const paymentPlatformMessage = document.getElementById("paymentPlatform");
    const platformCard = document.createElement("div");
    platformCard.classList.add("paymentCard");

    const smallimgWrapper = document.createElement("div") ;
    smallimgWrapper.classList.add("smallPicHolder");

    const confirmPaymentButton = document.createElement("div");
    confirmPaymentButton.classList.add("buttonForComfirmPayment");

    confirmPaymentButton.innerHTML = `<h4> Paid </h4>`;

    let yourPaymentPlatform = `Your Payment Platform`;
    let introToPlatforms = `You can choose to pay through the following platforms`;
    let bigImg = `"../../images/background/piggyVest2.png"`;
    let smallpic1 = `"../../images/background/FlutterWave2.png"`;
    let smallPic2 = `"../../images/background/paystack.png"`;
    let smallPic3 = `"../../images/background/piggyVest2.png"`;
    let smallPic4 = `"../../images/background/moniepoint2.png"`;
    let smallPic5 = `"../../images/background/OPay2.webp"`;

    showPaymentPlatform.innerHTML = `<h3> ${yourPaymentPlatform} </h3>`;
    introductionToPaymentPlatform.innerHTML = `<h3> ${introToPlatforms} </h3>`;
    bigImagePlatform.innerHTML = `<img id="bigPhoto" src=${bigImg}>`;
    showSmallPic1.innerHTML = `<img id="smallPhotowave" src=${smallpic1}>`;
    showSmallPic2.innerHTML = `<img id="smallPhoto" src=${smallPic2}>`;
    showSmallPic3.innerHTML = `<img id="smallPhotopigy" src=${smallPic3}>`;
    showSmallPic4.innerHTML = `<img id="smallPhotoM" src=${smallPic4}>`;
    showSmallPic5.innerHTML = `<img id="smallPhoto" src=${smallPic5}>`;

    platformCard.appendChild(showPaymentPlatform);
    platformCard.appendChild(introductionToPaymentPlatform);
    platformCard.appendChild(bigImagePlatform);
    smallimgWrapper.appendChild(showSmallPic1);
    smallimgWrapper.appendChild(showSmallPic2);
    smallimgWrapper.appendChild(showSmallPic3);
    smallimgWrapper.appendChild(showSmallPic4);
    smallimgWrapper.appendChild(showSmallPic5);
    platformCard.appendChild(smallimgWrapper);
    platformCard.appendChild(confirmPaymentButton);

    paymentPlatformMessage.appendChild(platformCard);

    showSmallPic1.addEventListener("click", continueFunction);
    showSmallPic2.addEventListener("click", payStackFunction);
    showSmallPic4.addEventListener("click", moniepointFunction)
    showSmallPic5.addEventListener("click", opayFunction);
    confirmPaymentButton.addEventListener("click", requestFunction);
}

function moniepointFunction() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const paymentPlatformMessage = document.getElementById("paymentPlatform");
    const platformCard = document.createElement("div");
    platformCard.classList.add("paymentCard");

    const smallimgWrappermonie = document.createElement("div") ;
    smallimgWrappermonie.classList.add("smallPicHoldermonie");

    const confirmPaymentButton = document.createElement("div");
    confirmPaymentButton.classList.add("buttonForComfirmPayment");

    confirmPaymentButton.innerHTML = `<h4> Paid </h4>`;

    let yourPaymentPlatform = `Your Payment Platform`;
    let introToPlatforms = `You can choose to pay through the following platforms`;
    let bigImg = `"../../images/background/moniepoint2.png"`;
    let smallpic1 = `"../../images/background/FlutterWave2.png"`;
    let smallPic2 = `"../../images/background/paystack.png"`;
    let smallPic3 = `"../../images/background/piggyVest2.png"`;
    let smallPic4 = `"../../images/background/moniepoint2.png"`;
    let smallPic5 = `"../../images/background/OPay2.webp"`;

    showPaymentPlatform.innerHTML = `<h3> ${yourPaymentPlatform} </h3>`;
    introductionToPaymentPlatform.innerHTML = `<h3> ${introToPlatforms} </h3>`;
    bigImagePlatform.innerHTML = `<img id="bigPhoto" src=${bigImg}>`;
    showSmallPic1.innerHTML = `<img id="smallPhotowave" src=${smallpic1}>`;
    showSmallPic2.innerHTML = `<img id="smallPhoto" src=${smallPic2}>`;
    showSmallPic3.innerHTML = `<img id="smallPhotopigy" src=${smallPic3}>`;
    showSmallPic4.innerHTML = `<img id="smallPhotoM" src=${smallPic4}>`;
    showSmallPic5.innerHTML = `<img id="smallPhoto" src=${smallPic5}>`;

    platformCard.appendChild(showPaymentPlatform);
    platformCard.appendChild(introductionToPaymentPlatform);
    platformCard.appendChild(bigImagePlatform);
    smallimgWrappermonie.appendChild(showSmallPic1);
    smallimgWrappermonie.appendChild(showSmallPic2);
    smallimgWrappermonie.appendChild(showSmallPic3);
    smallimgWrappermonie.appendChild(showSmallPic4);
    smallimgWrappermonie.appendChild(showSmallPic5);
    platformCard.appendChild(smallimgWrappermonie);
    platformCard.appendChild(confirmPaymentButton);

    paymentPlatformMessage.appendChild(platformCard);

    showSmallPic1.addEventListener("click", continueFunction);
    showSmallPic3.addEventListener("click", piggyVestFunction);
    showSmallPic2.addEventListener("click", payStackFunction);
    showSmallPic5.addEventListener("click", opayFunction);
    confirmPaymentButton.addEventListener("click", requestFunction);
}

function opayFunction() {
    const notification = this.parentNode.parentNode;
    const parent = notification.parentNode
    parent.removeChild(notification);

    const paymentPlatformMessage = document.getElementById("paymentPlatform");
    const platformCard = document.createElement("div");
    platformCard.classList.add("paymentCard");

    const smallimgWrapper = document.createElement("div") ;
    smallimgWrapper.classList.add("smallPicHolder");

    const confirmPaymentButton = document.createElement("div");
    confirmPaymentButton.classList.add("buttonForComfirmPayment");

    confirmPaymentButton.innerHTML = `<h4> Paid </h4>`;

    let yourPaymentPlatform = `Your Payment Platform`;
    let introToPlatforms = `You can choose to pay through the following platforms`;
    let bigImg = `"../../images/background/OPay2.webp"`;
    let smallpic1 = `"../../images/background/FlutterWave2.png"`;
    let smallPic2 = `"../../images/background/paystack.png"`;
    let smallPic3 = `"../../images/background/piggyVest2.png"`;
    let smallPic4 = `"../../images/background/moniepoint2.png"`;
    let smallPic5 = `"../../images/background/OPay2.webp"`;

    showPaymentPlatform.innerHTML = `<h3> ${yourPaymentPlatform} </h3>`;
    introductionToPaymentPlatform.innerHTML = `<h3> ${introToPlatforms} </h3>`;
    bigImagePlatform.innerHTML = `<img id="bigPhoto" src=${bigImg}>`;
    showSmallPic1.innerHTML = `<img id="smallPhotowave" src=${smallpic1}>`;
    showSmallPic2.innerHTML = `<img id="smallPhoto" src=${smallPic2}>`;
    showSmallPic3.innerHTML = `<img id="smallPhotopigy" src=${smallPic3}>`;
    showSmallPic4.innerHTML = `<img id="smallPhotoM" src=${smallPic4}>`;
    showSmallPic5.innerHTML = `<img id="smallPhoto" src=${smallPic5}>`;

    platformCard.appendChild(showPaymentPlatform);
    platformCard.appendChild(introductionToPaymentPlatform);
    platformCard.appendChild(bigImagePlatform);
    smallimgWrapper.appendChild(showSmallPic1);
    smallimgWrapper.appendChild(showSmallPic2);
    smallimgWrapper.appendChild(showSmallPic3);
    smallimgWrapper.appendChild(showSmallPic4);
    smallimgWrapper.appendChild(showSmallPic5);
    platformCard.appendChild(smallimgWrapper);
    platformCard.appendChild(confirmPaymentButton);

    paymentPlatformMessage.appendChild(platformCard);

    showSmallPic1.addEventListener("click", continueFunction);
    showSmallPic2.addEventListener("click", payStackFunction);
    showSmallPic4.addEventListener("click", moniepointFunction)
    showSmallPic5.addEventListener("click", opayFunction);
    confirmPaymentButton.addEventListener("click", requestFunction);
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

function setConditionForMinimumCard() {
    if (input1.value.length > 0 && input2.value.length > 0) {
        setCardMinimal();
    }else if (input2.value.length <= 0) {
        alert("enter some values ...");
    }else{
        alert("please enter some values ...")
    }

    input1.value = "";
    input2.value = "";
}

button.addEventListener("click", setConditionForCard)
button2.addEventListener("click", setConditionForMinimumCard);