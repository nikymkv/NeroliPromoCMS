function initializeTimer() {
  var timerEl = document.getElementById('timer');
  var time = new Date(timerEl.getAttribute('time'));
  console.log(time);

  var yearTimer = time.getFullYear();
  var monthTimer = time.getMonth();
  var dayTimer = time.getDate();
  var hoursTimer = time.getHours();
  var minutesTimer = time.getMinutes();
  console.log(yearTimer, monthTimer, dayTimer, hoursTimer, minutesTimer);
  var endDate = new Date(yearTimer, monthTimer, dayTimer, hoursTimer, minutesTimer);

  var currentDate = new Date();
  var seconds = (endDate - currentDate) / 1000;
  if (seconds > 0) {
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    minutes = (hours - Math.floor(hours)) * 60;
    days = Math.floor(days);
    hours = Math.floor(hours) - days * 24;

    seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
    minutes = Math.floor(minutes);

    setTimePage(days, hours, minutes, seconds);

    function secOut() {
      if (seconds == 0) {
        if (minutes == 0) {
          if (hours == 0) {
            if (days == 0) {
              showMessage(timerId);
            } else {
              days--;
              hours = 24;
              minutes = 60;
              seconds = 60;
            }
          } else {
            hours--;
            minutes = 60;
            seconds = 60;
          }
        } else {
          minutes--;
          seconds = 60;
        }
      } else {
        seconds--;
      }
      setTimePage(days, hours, minutes, seconds);
    }
    timerId = setInterval(secOut, 1000);
  } else {
    alert("Установленая дата уже прошла");
  }
}


function setTimePage(d, h, m, s) {
  var days = document.getElementById("days");
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
}

// Menu

let nav_img = document.getElementById("mobil__menu");
let nav = document.getElementsByClassName("mobil__menu__nav");
let topPage__nav = document.getElementById("topPage");
let eventPage__nav = document.getElementById("eventPage");
let galleryPage__nav = document.getElementById("galleryPage");
let partnersPage__nav = document.getElementById("partnersPage");
let feedack__nav = document.getElementById("feedback__nav");
let topPage = document.getElementsByClassName("main");
let eventPage = document.getElementsByClassName("nextEvent");
let galleryPage = document.getElementsByClassName("gallery");
let partnersPage = document.getElementsByClassName("partners");
let bePartnersPage = document.getElementsByClassName("bePartners");
let feedbackPage = document.getElementsByClassName("feedback");
let timer = document.getElementById("timer");
var toTheForm =
  topPage[0].offsetHeight +
  eventPage[0].offsetHeight +
  galleryPage[0].offsetHeight +
  bePartnersPage[0].offsetHeight +
  feedbackPage[0].offsetHeight;

nav_img.onclick = function () {
  nav[0].classList.toggle("mobil__menu__active");
  if (nav_img.getAttribute("src") === "img/menu_mobil.svg") {
    nav_img.setAttribute("src", "img/cross.svg");
  } else {
    nav_img.setAttribute("src", "img/menu_mobil.svg");
  }
};

topPage__nav.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

eventPage__nav.onclick = function () {
  let distance = topPage[0].offsetHeight + timer.offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

galleryPage__nav.onclick = function () {
  let distance = topPage[0].offsetHeight + eventPage[0].offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

partnersPage__nav.onclick = function () {
  let distance =
    topPage[0].offsetHeight +
    eventPage[0].offsetHeight +
    galleryPage[0].offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

feedack__nav.onclick = function () {
  let distance =
    topPage[0].offsetHeight +
    eventPage[0].offsetHeight +
    galleryPage[0].offsetHeight +
    bePartnersPage[0].offsetHeight +
    feedbackPage[0].offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

document.getElementById("btnUP").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Gallery

let gallery_toogle1 = document.getElementById("galleryToogle1");
let gallery_toogle2 = document.getElementById("galleryToogle2");
let gallery_toogle3 = document.getElementById("galleryToogle3");

let galleriSlider1 = document.getElementsByClassName("gallerySlider1")[0];
let galleriSlider2 = document.getElementsByClassName("gallerySlider2")[0];
let galleriSlider3 = document.getElementsByClassName("gallerySlider3")[0];

var sliderId = 0

let galleriSliderMobil1 = document.getElementsByClassName(
  "gallerySlider__mobil1"
)[0];
let galleriSliderMobil2 = document.getElementsByClassName(
  "gallerySlider__mobil2"
)[0];
let galleriSliderMobil3 = document.getElementsByClassName(
  "gallerySlider__mobil3"
)[0];

gallery_toogle1.onclick = function () {
  gallery_toogle1.style.fontWeight = 600;
  gallery_toogle2.style.fontWeight = 400;
  gallery_toogle3.style.fontWeight = 400;
  galleriSlider1.classList.remove("disabledSlider");
  galleriSlider2.classList.add("disabledSlider");
  galleriSlider3.classList.add("disabledSlider");
  galleriSliderMobil1.classList.remove("disabledSlider");
  galleriSliderMobil2.classList.add("disabledSlider");
  galleriSliderMobil3.classList.add("disabledSlider");
  sliderId = 10
};
gallery_toogle2.onclick = function () {
  gallery_toogle1.style.fontWeight = 400;
  gallery_toogle2.style.fontWeight = 600;
  gallery_toogle3.style.fontWeight = 400;
  galleriSlider1.classList.add("disabledSlider");
  galleriSlider2.classList.remove("disabledSlider");
  galleriSlider3.classList.add("disabledSlider");
  galleriSliderMobil1.classList.add("disabledSlider");
  galleriSliderMobil2.classList.remove("disabledSlider");
  galleriSliderMobil3.classList.add("disabledSlider");
  sliderId = 20
};
gallery_toogle3.onclick = function () {
  gallery_toogle1.style.fontWeight = 400;
  gallery_toogle2.style.fontWeight = 400;
  gallery_toogle3.style.fontWeight = 600;
  galleriSlider1.classList.add("disabledSlider");
  galleriSlider2.classList.add("disabledSlider");
  galleriSlider3.classList.remove("disabledSlider");
  galleriSliderMobil1.classList.add("disabledSlider");
  galleriSliderMobil2.classList.add("disabledSlider");
  galleriSliderMobil3.classList.remove("disabledSlider");
  sliderId = 30
};

document.getElementById("InTheForm").onclick = function () {
  window.scrollTo({
    top: toTheForm,
    behavior: "smooth",
  });
};
document.getElementsByClassName(
  "partners__slide__add"
)[0].onclick = function () {
  window.scrollTo({
    top: toTheForm,
    behavior: "smooth",
  });
};

// Animation

document.addEventListener("scroll", () => {
  if (
    document.getElementsByClassName("main")[0].getBoundingClientRect().bottom <
    50
  ) {
    document.getElementsByClassName("btnUP")[0].classList.add("btnUPActive");
    document.getElementsByClassName("btnUP")[0].classList.remove("unActive");
  } else {
    document.getElementsByClassName("btnUP")[0].classList.add("unActive");
    document.getElementsByClassName("btnUP")[0].classList.remove("btnUPActive");
  }
});



nav_img.onclick = function () {
  nav[0].classList.toggle("mobil__menu__active");
  if (nav_img.getAttribute("src") === "http://nerolipromo.loc/themes/nerolipromo/assets/img/menu_mobil.svg") {
  nav_img.setAttribute("src", "http://nerolipromo.loc/themes/nerolipromo/assets/img/cross.svg");
  } else {
  nav_img.setAttribute("src", "http://nerolipromo.loc/themes/nerolipromo/assets/img/menu_mobil.svg");
  }
  };


  // Gallery

  
  function setTitleGallary(){
    let gallery_slide = document.querySelectorAll('#slick-slide' + sliderId + ' > .gallery_slide')

    
    let gb__date = document.getElementById('gb__date')
    let gb__title = document.getElementById('gb__title')
    // for(let elem of gallery_slide){
    //   gb__date.innerHTML = elem.getAttribute('date')
    //   gb__title.innerHTML = elem.getAttribute('title')
      
    // }

      // for(let elem of gallery_slide){
      gb__date.innerHTML = gallery_slide[0].getAttribute('date')
      gb__title.innerHTML = gallery_slide[0].getAttribute('title')
      console.log(sliderId)

    // }
  }

  window.onload = function () {
    initializeTimer();
    window.scrollTo(0, 0);
    
    setTimeout(function(){gallery_toogle1.click()},200)
    
    const mediaQuery = window.matchMedia("(max-width: 920px)");
    if (mediaQuery.matches) {
      document.getElementsByClassName("nextEvent__time")[0].remove();
    }
  };



MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // Add the actions to be done here if a changes on DOM happened 
    setTitleGallary()
});

// Register the element root you want to look for changes
observer.observe(document, {
  subtree: true,
  attributes: true
});