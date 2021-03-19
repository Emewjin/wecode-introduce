const filterIcons = document.querySelectorAll(".tools-img img");
const projectItem = document.querySelectorAll(".project-item");
const items = projectItem[0].childNodes;
const SCALE = "click-scale"

function changeClassList(a,b,c){
    filterIcons[a].classList.add(SCALE);
    filterIcons[b].classList.remove(SCALE);
    filterIcons[c].classList.remove(SCALE);
}

function showJsProject(){
    changeClassList(0,1,2);
    items[1].classList.add(HIDDEN);
    items[3].classList.add(HIDDEN);
}

function showHtmlProject(){
    changeClassList(1,0,2);
    items[1].classList.remove(HIDDEN);
    items[3].classList.remove(HIDDEN);
}

function showCssProject(){
    changeClassList(2,0,1);
    items[1].classList.remove(HIDDEN);
    items[3].classList.remove(HIDDEN);
}

filterIcons[0].addEventListener("click", showJsProject);
filterIcons[1].addEventListener("click", showHtmlProject);
filterIcons[2].addEventListener("click", showCssProject);