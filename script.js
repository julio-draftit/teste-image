window.addEventListener('load', () => {
    let background = document.querySelector(".background");
    let section7 = document.querySelector(".section-7");
  
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let maxScroll = section7.offsetHeight - window.innerHeight;
      let percent = scrollTop / maxScroll;
      let movement = percent * (background.offsetWidth - window.innerWidth);
      background.style.transform = `translateX(-${movement}px)`;
    });
  });