const header = document.querySelector("header");

const menuButton = document.getElementById("menu-btn"); 
const designLink1 = document.getElementById("link1");
const designLink2 = document.getElementById("link2")
const designLinkTag = document.getElementById("linkHolder");
const designCloseButton = document.getElementById("closeButton");

window.addEventListener ('scroll', function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

function addLinkMenu() {
    const navigationMessage = document.querySelector("#navMessage");
    const linkCard = document.createElement("div");
    linkCard.classList.add("navlist");

    largePictureHolder.style.display = "none";
    header.style.height = "320px";

    let link1 = `Home`;
    let link2 = `Collection`;

    designLink1.innerHTML = `<div><a href="index.html" class="linkTag">${link1}</a></div>`;
    designLink2.innerHTML = `<div><a href="collection.html" class="linkTag">${link2}</a></div>`;

    menuButton.style.display = "none";
    designCloseButton.style.display = "block";

    designLinkTag.appendChild(designLink1);
    designLinkTag.appendChild(designLink2);
    linkCard.appendChild(designLinkTag);
    navigationMessage.appendChild(linkCard);
}

menuButton.addEventListener("click", addLinkMenu)

// function addLinkMenu() {
//     let link1 = `Home`;
//     let link2 = `Collection`;

//     designLinkTag.innerHTML = `<a href="index.html" class="linkTag">${link1}</a>
//                             <a href="sign-up.html" class="linkTag">${link2}</a>`;

//     linkCard.appendChild(designLinkTag);
//     navigationMessage.appendChild(linkCard);

//     largePictureHolder.style.display = "none";  

//     toggleMenuImgToCloseImgFunction()
// }

// function toggleMenuImgToCloseImgFunction() {
//     let closeButtonImg = `"images/emoji/delete.png"`;
//     menuButton.style.display = "none"

//     designCloseButton.innerHTML = `<a href="collection.html"><img src=${closeButtonImg} class="close-btn"></a>`;
// }

// menuButton.addEventListener("click", addLinkMenu);  

const arrayOfPictures = ["images/choose-image.png", "images/pasta/spaghetti.jpg", "images/pasta/fusilli.webp", "images/pasta/ruote.jpg",
"images/pasta/macaroni.jpg", "images/pasta/rigate.jpg", "images/pasta/Pappardelle.jpg", "images/pasta/orzo.jpg", "images/pasta/Indomie.jpg",
"images/pasta/tagliatelle.jpg", "images/pasta/radiatore.jpg", "images/pasta/gnocchi.jpg", "images/pasta/penne1.jpg", 

"images/local-foods/Jollof_Rice.jpg", 
"images/local-foods/Yam-Porridge.jpg", "images/local-foods/iyan(pounded_yam).JPG", "images/local-foods/pepper_soup.jpg",
"images/local-foods/boli(roasted_plantain).jpg", "images/local-foods/ukpo_oka.jpg", "images/local-foods/amala.jpg", "images/local-foods/fried-plantain.jpeg",
"images/local-foods/egusi.jpg", "images/local-foods/ogbonno.jpg", "images/local-foods/efo-riro.jpg", "images/local-foods/abacha.jpg",

"images/snacks/hot_dog2.webp", "images/snacks/cookies.jpg", "images/snacks/meat_pie.jpg", "images/snacks/pizza.jpg", "images/snacks/sandwich2.jpg",
"images/snacks/plantain_chips.jpg", "images/snacks/popcorn.webp", "images/snacks/corn_dog.jpg", "images/snacks/shawarma.webp", "images/snacks/waffles.webp",
"images/snacks/burger.jpg", "images/snacks/donut.webp", "images/drinks/coca cola.webp", "images/drinks/fanta.jpg", "images/drinks/schweppes.webp", "images/drinks/mirinda.jpg", "images/drinks/sprite.png",
"images/drinks/big_pic_smoov.jpg", "images/drinks/pepesi.webp", "images/drinks/LIMCA.png", "images/drinks/lacasera.png", "images/drinks/maltina.jpg", 
"images/drinks/lucozade.jpg", "images/drinks/5alive.jpg"];

const arraryOfFoodName = ["", "Spaghetti", "Fusilli", "Rhoute", "Macaroni", "Rigate", "Pappardelle", "Orzo", "Indomie",
"Tagliatelle", "Radiatore", "Gnocchi", "Penne", "Jollof Rice", "Asaro (Yam Porridge)", "Iyan (Pounded Yam)", "Nsala (Pepper Soup)", 
"Boli (Roasted Plantain)", "Ukpo Oka (Corn Pudding)", "Amala", "Plantain And Egg", "Egusi", "Ogbono", "Efo Riro", "Abacha",
"Hot Dog", "Cookies", "Meat Pie", "Pizza", "Sandwich", "Chips", "Popcorn", "Corn Dog", "Shawarma", "Waffles", "Burger", "Donut",
"Coca Cola", "Fanta", "Schweppes", "Mirinda", "Sprite", "Chapman", "Pepsi", "Limca", "laCasera", "Maltina", "Lucozade",
"5alive"];

const arrayOfURL = ["", "pasta/spaghetti/spaghetti.html", "pasta/fusilli/fusilli.html", "pasta/rhoute/rhuote.html",
"pasta/macaroni/macaroni.html", "pasta/rigate/rigate.html", "pasta/pappardelle/pappardelle.html", "pasta/orzo/orzo.html",
"pasta/indomie/indomie.html", "pasta/tagliatelle/tagliatelle.html", "pasta/radiatore/radiatore.html", "pasta/gnocchi/gnocchi.html",
"pasta/penne/penne.html", "local-food/jollof-rice/jollof-rice.html", "local-food/asaro/asaro.html", "local-food/iyan/iyan.html",
"local-food/nsala/nsala.html", "local-food/boli/boli.html", "local-food/ukpo-oka/ukpo-oka.html", "local-food/amala/amala.html",
"local-food/plantain/plantain.html", "local-food/egusi/egusi.html", "local-food/ogbono/ogbono.html", "local-food/efo-riro/efo-riro.html", 
"local-food/abacha/abacha.html", "snacks/hot-dog/hot-dog.html", "snacks/cookies/cookies.html", "snacks/meat-pie/meat-pie.html",
"snacks/pizza/pizza.html", "snacks/sandwich/sandwich.html", "snacks/chips/chips.html", "snacks/pop-corn/popcorn.html", 
"snacks/corn-dog/corndog.html", "snacks/shawarma/shawarma.html", "snacks/waffles/waffles.html", "snacks/burger/burger.html",
"snacks/donut/donut.html", "drinks/coke/coke.html", "drinks/fanta/fanta.html", "drinks/schweppes/schweppes.html", 
"drinks/mirinda/mirinda.html", "drinks/sprite/sprite.html", "drinks/chapman/chapman.html", "drinks/pepsi/pepsi.html",
"drinks/limca/limca.html", "drinks/lacasera/lacasera.html", "drinks/malt/malt.html", "drinks/lucozade/lucozade.html",
"drinks/5alive/5alive.html"]

const linkPictureHolder = document.getElementById("anchor")
const largePictureHolder = document.getElementById("large-image");
const foodName = document.getElementById("name");

largePictureHolder.src = arrayOfPictures[0];

function setLargeImage(index) {
    largePictureHolder.src = arrayOfPictures[index];
    linkPictureHolder.href = arrayOfURL[index];
    foodName.innerHTML = arraryOfFoodName[index];
}





































// const largePictureHolder = document.getElementById("large-image");

// largePictureHolder.src = arrayOfPictures[0];

// function setLargeImage (num) {
    // return largePictureHolder.src = arrayOfPictures[num];
// }