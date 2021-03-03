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
    document.getElementsByClassName("nextEvent__time")[0].style.display =
      "none";
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
// var toTheForm =
//   topPage[0].offsetHeight +
//   eventPage[0].offsetHeight +
//   galleryPage[0].offsetHeight +
//   bePartnersPage[0].offsetHeight +
//   feedbackPage[0].offsetHeight;


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
  console.log('next slide')
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

var sliderId = 10

let galleriSliderMobil1 = document.getElementsByClassName(
  "gallerySlider__mobil1"
)[0];
let galleriSliderMobil2 = document.getElementsByClassName(
  "gallerySlider__mobil2"
)[0];
let galleriSliderMobil3 = document.getElementsByClassName(
  "gallerySlider__mobil3"
)[0];

// gallery_toogle1.onclick = function () {
//   gallery_toogle1.style.fontWeight = 600;
//   gallery_toogle2.style.fontWeight = 400;
//   gallery_toogle3.style.fontWeight = 400;
//   galleriSlider1.classList.remove("disabledSlider");
//   galleriSlider2.classList.add("disabledSlider");
//   galleriSlider3.classList.add("disabledSlider");
//   galleriSliderMobil1.classList.remove("disabledSlider");
//   galleriSliderMobil2.classList.add("disabledSlider");
//   galleriSliderMobil3.classList.add("disabledSlider");
//   sliderId = 10
// };
// gallery_toogle2.onclick = function () {
//   gallery_toogle1.style.fontWeight = 400;
//   gallery_toogle2.style.fontWeight = 600;
//   gallery_toogle3.style.fontWeight = 400;
//   galleriSlider1.classList.add("disabledSlider");
//   galleriSlider2.classList.remove("disabledSlider");
//   galleriSlider3.classList.add("disabledSlider");
//   galleriSliderMobil1.classList.add("disabledSlider");
//   galleriSliderMobil2.classList.remove("disabledSlider");
//   galleriSliderMobil3.classList.add("disabledSlider");
//   sliderId = 20
// };
// gallery_toogle3.onclick = function () {
//   gallery_toogle1.style.fontWeight = 400;
//   gallery_toogle2.style.fontWeight = 400;
//   gallery_toogle3.style.fontWeight = 600;
//   galleriSlider1.classList.add("disabledSlider");
//   galleriSlider2.classList.add("disabledSlider");
//   galleriSlider3.classList.remove("disabledSlider");
//   galleriSliderMobil1.classList.add("disabledSlider");
//   galleriSliderMobil2.classList.add("disabledSlider");
//   galleriSliderMobil3.classList.remove("disabledSlider");
//   sliderId = 30
// };

let inForm = document.querySelectorAll(".mtb__text > #InTheForm")
for(let elem of inForm){
  elem.onclick = function(){
    // let toTheForm = document.body.scrollHeight
    let toTheForm = document.querySelector('.feedback__head').getBoundingClientRect().top
    window.scrollTo({
      top: toTheForm,
      behavior: "smooth",
    });
    console.log(toTheForm)
  }
}
// document.querySelectorAll(".mtb__text > #InTheForm")[1].onclick = function () {

//   window.scrollTo({
//     top: toTheForm,
//     behavior: "smooth",
//   });
//   console.log(toTheForm)
// };
let inForm1 = document.querySelectorAll(
  ".partners__slide__add")
  for(let elem1 of inForm1){
    elem1.onclick = function(){

      // let toTheForm1 = document.querySelector('.feedback__head').getBoundingClientRect().top
      let toTheForm1 = document.body.scrollHeight
      window.scrollTo({
        top: toTheForm1,
        behavior: "smooth",
      });
      console.log(toTheForm1)
    }
  }


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
  if (nav_img.getAttribute("src") === "http://neroli.online/themes/nerolipromo/assets/img/menu_mobil.svg") {
  nav_img.setAttribute("src", "http://neroli.online/themes/nerolipromo/assets/img/cross.svg");
  } else {
  nav_img.setAttribute("src", "http://neroli.online/themes/nerolipromo/assets/img/menu_mobil.svg");
  }
  };

  // Gallery

  
  // function setTitleGallary(){
  //   let gallery_slide = document.querySelector('#slick-slide' + sliderId + ' > .gallery_slide')

  //   let gb__date = document.getElementById('gb__date')
  //   let gb__title = document.getElementById('gb__title')
  //   // for(let elem of gallery_slide){
  //   //   gb__date.innerHTML = elem.getAttribute('date')
  //   //   gb__title.innerHTML = elem.getAttribute('title')
      
  //   // }

  //     // for(let elem of gallery_slide){
  //     gb__date.innerHTML = gallery_slide.getAttribute('date')
  //     gb__title.innerHTML = gallery_slide.getAttribute('title')

  //   // }
  // }

  window.onload = function () {
    initializeTimer();
    
    setTimeout(function(){gallery_toogle1.click()},200)
    var toTheForm = document.body.scrollHeight
    console.log('onload', document.body.scrollHeight)
    const mediaQuery = window.matchMedia("(max-width: 920px)");
    if (mediaQuery.matches) {
      document.getElementsByClassName("nextEvent__time")[0].remove();
    }

    eventSliderGallery()

  };

  function eventSliderGallery()
  {
    let next_btn = document.querySelector('.gallerySlider1 button.slick-next.slick-arrow')
    next_btn.addEventListener('click', function(){
      getPCSlider()
    })

    let prev_btn = document.querySelector('.gallerySlider1 button.slick-prev.slick-arrow')
    prev_btn.addEventListener('click', function(){
      getPCSlider()
    })

    let next_btn_mobile = document.querySelector('.slider.gallerySlider.gallerySlider__mobil.gallerySlider__mobil1.slick-initialized.slick-slider button.slick-next.slick-arrow')
    next_btn_mobile.addEventListener('click', function(){
      getMobileSlider()
    })

    let prev_btn_mobile = document.querySelector('.slider.gallerySlider.gallerySlider__mobil.gallerySlider__mobil1.slick-initialized.slick-slider button.slick-prev.slick-arrow')
    prev_btn_mobile.addEventListener('click', function(){
      getMobileSlider()
    })
  }

  function getMobileSlider()
  {
    let img = document.querySelector('.gallerySlider__mobil1 .slick-list .slick-track .slick-current.slick-active img')
    let gb__date_mobile = document.getElementById('gb__date_mobile')
    let gb__title_mobile = document.getElementById('gb__title_mobile')
    gb__date_mobile.innerText = img.getAttribute('time')
    gb__title_mobile.innerText = '“' + img.getAttribute('title') + '”'
  }

  function getPCSlider()
  {
    let curId_gs1 = document.querySelector('.gallerySlider1 .slick-list .slick-track .slick-current.slick-active').getAttribute('data-slick-index')
    curId_gs1 = parseInt(curId_gs1) + 1
    let slide = document.getElementById('slide_' + curId_gs1)
    let gb__date = document.getElementById('gb__date')
    let gb__title = document.getElementById('gb__title')
    gb__date.innerText = slide.getAttribute('time')
    gb__title.innerText = '“' + slide.getAttribute('ev_title') + '”'
  }


  function compressIMG(){
    let compress =  document.querySelector('.gallerySlider__mobil > .slick-list > .slick-track > .slick-active')
    let compBox = document.querySelector('.gallerySlider__mobil')
    let arrow = document.querySelector('.gallerySlider__mobil > .slick-arrow')

      compBox.style.height = compress.offsetHeight + 'px'

    compBox.style.transition = '0.6s'
  
  }


MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // Add the actions to be done here if a changes on DOM happened 
    // setTitleGallary()
    // compressIMG()
});

// Register the element root you want to look for changes
observer.observe(document, {
  subtree: true,
  attributes: true
});

document.getElementById('phoneNumber').addEventListener('focus', function(){
  document.getElementById('phoneNumber').setAttribute('placeholder', '0710000000')
})
document.getElementById('phoneNumber').addEventListener('blur', function(){
  document.getElementById('phoneNumber').setAttribute('placeholder', 'Введите ваш номер телефона')
})