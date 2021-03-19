const projectImgs = document.querySelectorAll('.project img');
const favorImgs = document.querySelectorAll('.favorite-img img');
const fadeImgs = [...projectImgs, ...favorImgs];

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
        window.scrollY + window.innerHeight - fadeImg.height / 4;
      const imageBottom = fadeImg.offsetTop + fadeImg.height;
      const isQuarterShown = scrollInAt > fadeImg.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isQuarterShown && isNotScrolledPast) {
        fadeImg.classList.add("active");
      } else {
        fadeImg.classList.remove("active");
      }
    });
  }
  
window.addEventListener("scroll", debounce(checkScroll));
