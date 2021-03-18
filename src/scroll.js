const navBtns = document.querySelectorAll('nav ul li');

function moveToAnchor() {
    const aTag = this.querySelector('a');
    const hrefValue = aTag.getAttribute("href");
    const sectionId = hrefValue.slice(1);
    smoothScroll(sectionId, 1500)
}

function smoothScroll(el, duration) {
    const target = document.getElementById(el);
    // console.log('hi', target.offsetTop);
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    console.log(distance, startPosition, targetPosition);

    function animate(currentTime) {
        if(startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(startPosition, run);
        if(timeElapsed < duration) requestAnimationFrame(animate);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animate);

}

navBtns.forEach((navBtn) => 
    navBtn.addEventListener('click', moveToAnchor)
);