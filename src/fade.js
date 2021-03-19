const projectImgs = document.querySelectorAll('.project img');
const favorImgs = document.querySelectorAll('.favorite-img img');
const fadeImgs = [...projectImgs, ...favorImgs];
const ACTIVE = "active";

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function checkScroll() {
    fadeImgs.forEach((fadeImg) => {
      const scrollInAt =
      window.pageYOffset + window.innerHeight - fadeImg.height / 4;
      const imageBottom = fadeImg.offsetTop + fadeImg.height;
      const isQuarterShown = scrollInAt > fadeImg.offsetTop;
      const isNotScrolledPast = window.pageYOffset < imageBottom;
      if (isQuarterShown && isNotScrolledPast) {
        fadeImg.classList.add(ACTIVE);
      } else {
        fadeImg.classList.remove(ACTIVE);
      }
    });
  }
  
window.addEventListener("scroll", debounce(checkScroll));
