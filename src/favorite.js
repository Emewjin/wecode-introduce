const favImgDog = document.querySelector('.js-fav-two');
const favImgDrama = document.querySelector('.js-fav-one');
const favoriteItem = document.querySelectorAll('.favorite');
const HIDDEN="hidden";

function printFavImg(a,b){
    b.classList.add(HIDDEN);
    a.classList.remove(HIDDEN);
}

function clickDramaImg(){
    printFavImg(favImgDrama,favImgDog);
}

function clickDogImg(){
    printFavImg(favImgDog,favImgDrama);
}

favoriteItem[1].addEventListener("click", clickDramaImg);
favoriteItem[2].addEventListener("click", clickDogImg);