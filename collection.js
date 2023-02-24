const arrayOfInfo = ["spaghetti", "fusilli", "macaroni"]

const arrayOfPictures = ["images/choose-image.png", "images/pasta/spaghetti.jpg", "images/pasta/fusilli.webp", "images/pasta/ruote.jpg",
"images/pasta/macaroni.jpg", "images/pasta/rigate.jpg", "images/pasta/Pappardelle.jpg", "images/pasta/orzo.jpg", "images/pasta/Indomie.jpg",
"images/pasta/tagliatelle.jpg", "images/pasta/radiatore.jpg", "images/pasta/gnocchi.jpg", "images/pasta/penne1.jpg", "images/local-foods/Jollof_Rice.jpg", 
"images/local-foods/Yam-Porridge.jpg", "images/local-foods/iyan(pounded_yam).JPG", "images/local-foods/pepper_soup.jpg",
"images/local-foods/boli(roasted_plantain).jpg", "images/local-foods/ukpo_oka.jpg", "images/local-foods/amala.jpg", "images/local-foods/fried-plantain.jpeg",
"images/local-foods/egusi.jpg", "images/local-foods/ogbonno.jpg", "images/local-foods/efo-riro.jpg", "images/local-foods/abacha.jpg"];

const largePictureHolder = document.getElementById("large-image");

largePictureHolder.src = arrayOfPictures[0];

function setLargeImage (num) {
    return largePictureHolder.src = arrayOfPictures[num];
}