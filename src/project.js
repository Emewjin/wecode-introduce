const filterIcon = document.querySelectorAll(".tools-img img");
const projectItem = document.querySelectorAll(".project div");
const OPACITY = "opacity-half"
const SCALE = "click-scale"

function changeClassList(a,b,c){
    filterIcon[a].classList.add(SCALE);
    filterIcon[b].classList.remove(SCALE);
    filterIcon[c].classList.remove(SCALE);
}

function showJsProject(){
    changeClassList(0,1,2);
    projectItem[0].classList.add(OPACITY);
}

function showHtmlProject(){
    changeClassList(1,0,2);
    projectItem[0].classList.remove(OPACITY);
}

function showCssProject(){
    changeClassList(2,0,1);
    projectItem[0].classList.remove(OPACITY);
}

filterIcon[0].addEventListener("click", showJsProject);
filterIcon[1].addEventListener("click", showHtmlProject);
filterIcon[2].addEventListener("click", showCssProject);