const filterIcon = document.querySelectorAll(".tools-img img");
const projectItem = document.querySelectorAll(".project div");
const OPACITY = "opacity-half"
const SCALE = "click-scale"

function showJsProject(){
    filterIcon[1].classList.remove(SCALE);
    filterIcon[2].classList.remove(SCALE);
    filterIcon[0].classList.add(SCALE);
    projectItem[0].classList.add(OPACITY);
}
function showHtmlProject(){
    filterIcon[0].classList.remove(SCALE);
    filterIcon[2].classList.remove(SCALE);
    filterIcon[1].classList.add(SCALE);
    projectItem[0].classList.remove(OPACITY);
}
function showCssProject(){
    filterIcon[0].classList.remove(SCALE);
    filterIcon[1].classList.remove(SCALE);
    filterIcon[2].classList.add(SCALE);
    projectItem[0].classList.remove(OPACITY);
}

filterIcon[0].addEventListener("click", showJsProject);
filterIcon[1].addEventListener("click", showHtmlProject);
filterIcon[2].addEventListener("click", showCssProject);