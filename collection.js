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

const arrayOfFoodPrice = ["", "<strong>Price:</strong> <i>₦900</i>", "<strong>Price:</strong> ₦1000", "<strong>Price:</strong> ₦850", "<strong>Price:</strong> ₦900",
"<strong>Price:</strong> ₦750", "<strong>Price:</strong> ₦950", "<strong>Price:</strong> ₦900", "<strong>Price:</strong> ₦950", "<strong>Price:</strong> ₦800",
"<strong>Price:</strong> 650", "<strong>Price:</strong> ₦550", "<strong>Price:</strong> ₦450", "<strong>Price:</strong> ₦1200", 
"<strong>Price:</strong> ₦700", "<strong>Price:</strong> ₦850", "<strong>Price:</strong> ₦900", "<strong>Price:</strong> ₦800",
"<strong>Price:</strong> ₦850", "<strong>Price:</strong> ₦650", "<strong>Price:</strong> ₦900", "<strong>Price:</strong> ₦1300",
"<strong>Price:</strong> ₦1000", "<strong>Price:</strong> ₦1000", "<strong>Price:</strong> ₦800",];

const arrayOfFoodDeliveryPrice = ["", "<strong>delivery:</strong> <i>₦900</i>", "<strong>delivery:</strong> ₦1000", "<strong>delivery:</strong> ₦850", "<strong>delivery:</strong> ₦900",
"<strong>delivery:</strong> ₦750", "<strong>delivery:</strong> ₦950", "<strong>delivery:</strong> ₦900", "<strong>delivery:</strong> ₦950", "<strong>delivery:</strong> ₦800",
"<strong>delivery:</strong> 650", "<strong>delivery:</strong> ₦550", "<strong>delivery:</strong> ₦450", "<strong>delivery:</strong> ₦1200", 
"<strong>delivery:</strong> ₦700", "<strong>delivery:</strong> ₦850", "<strong>delivery:</strong> ₦900", "<strong>delivery:</strong> ₦800",
"<strong>delivery:</strong> ₦850", "<strong>delivery:</strong> ₦650", "<strong>delivery:</strong> ₦900", "<strong>delivery:</strong> ₦1300",
"<strong>delivery:</strong> ₦1000", "<strong>delivery:</strong> ₦1000", "<strong>delivery:</strong> ₦800",];

const foodPrice = document.getElementById("price");
const foodDeliveryPrice = document.getElementById("delivery")
const largePictureHolder = document.getElementById("large-image");
const foodName = document.getElementById("name");

largePictureHolder.src = arrayOfPictures[0];

function setLargeImage(index) {
    largePictureHolder.src = arrayOfPictures[index];
    foodName.innerHTML = arraryOfFoodName[index];
    foodPrice.innerHTML = arrayOfFoodPrice[index];
    foodDeliveryPrice.innerHTML = arrayOfFoodDeliveryPrice[index]
}





































// const largePictureHolder = document.getElementById("large-image");

// largePictureHolder.src = arrayOfPictures[0];

// function setLargeImage (num) {
    // return largePictureHolder.src = arrayOfPictures[num];
// }