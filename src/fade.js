const projectImgs = document.querySelectorAll('.project img');
const favorImgs = document.querySelectorAll('.favorite-img img');
const fadeImgs = [...projectImgs, ...favorImgs];

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function checkScroll(e) {
    // console.count(e);
    fadeImgs.forEach((fadeImg) => {
      const scrollInAt =
        window.scrollY + window.innerHeight - fadeImg.height / 2;
      const imageBottom = fadeImg.offsetTop + fadeImg.height;
      const isHalfShown = scrollInAt > fadeImg.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        fadeImg.classList.add("active");
      } else {
        fadeImg.classList.remove("active");
      }
    });
  }
  
window.addEventListener("scroll", debounce(checkScroll));
