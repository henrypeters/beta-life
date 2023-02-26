const arrayOfPictures = ["images/choose-image.png", "images/pasta/spaghetti.jpg", "images/pasta/fusilli.webp", "images/pasta/ruote.jpg",
"images/pasta/macaroni.jpg", "images/pasta/rigate.jpg", "images/pasta/Pappardelle.jpg", "images/pasta/orzo.jpg", "images/pasta/Indomie.jpg",
"images/pasta/tagliatelle.jpg", "images/pasta/radiatore.jpg", "images/pasta/gnocchi.jpg", "images/pasta/penne1.jpg", "images/local-foods/Jollof_Rice.jpg", 
"images/local-foods/Yam-Porridge.jpg", "images/local-foods/iyan(pounded_yam).JPG", "images/local-foods/pepper_soup.jpg",
"images/local-foods/boli(roasted_plantain).jpg", "images/local-foods/ukpo_oka.jpg", "images/local-foods/amala.jpg", "images/local-foods/fried-plantain.jpeg",
"images/local-foods/egusi.jpg", "images/local-foods/ogbonno.jpg", "images/local-foods/efo-riro.jpg", "images/local-foods/abacha.jpg",
"images/snacks/puff-puff.jpg"];

const arraryOfFoodName = ["", "Spaghetti", "Fusilli", "Rhoute", "Macaroni", "Rigate", "Pappardelle", "Orzo", "Indomie",
"Tagliatelle", "Radiatore", "Gnocchi", "Penne", "Jollof Rice", "Asaro (Yam Porridge)", "Iyan (Pounded Yam)", "Nsala (Pepper Soup)", 
"Boli (Roasted Plantain)", "Ukpo Oka (Corn Pudding)", "Amala", "Plantain And Egg", "Egusi", "Ogbono", "Efo Riro", "Abacha",
"Puff Puff"];

const arrayOfURL = ["", "pasta/spaghetti/spaghetti.html", "pasta/fusilli.html", "pasta/rhuote.html"]

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