let navbar = document.querySelector('.header .navbar'); //Kód vyhledá první element s třídou navbar uvnitř elementu s třídou header a uloží ho do proměnné navbar.
let menuBtn = document.querySelector('#menu-btn'); /*Kód vyhledá element s id menu-btn a uloží ho do proměnné menuBtn. */

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}; //Kód nastaví funkci, která se spustí při kliknutí na menuBtn, a ta přepne třídu fa-times u menuBtn a třídu active u navbar.

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); //Kód spustí Swiper na elementu s třídou home-slider s funkcemi: uchopení kurzoru, nekonečný loop, centrovaní a navigační šipky.

  var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  }); //Tento kód spustí Swiper pro food-slider s funkcemi: uchopení kurzoru, nekonečný loop, centrování a responsivní zobrazení. 

  let previewContainer = document.querySelector('.food-preview-container');
  let previewBox = previewContainer.querySelectorAll('.food-preview');

  document.querySelectorAll('.food .slide').forEach(food => {
    food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
          preview.classList.add('active');
        }
      });
    };
  }); //Kód zajišťuje, že při kliknutí na každý prvek s třídou food .slide, se zobrazí náhled jídla. Každý prvek nese atribut data-name, který se porovná s atributem data-target v náhledech jídla a případně aktivuje odpovídající náhled. 

  previewContainer.querySelector('#close-preview').onclick = () =>{
    previewContainer.style.display = 'none';
    previewBox.forEach(close =>{
      close.classList.remove('active');
    });
  }; //Kód při kliknutí na prvek s id close-preview v rámci prvku previewContainer skryje kontejner s náhledem jídla a odebrá všechny třídy active z prvků previewBox.

  var swiper = new Swiper(".menu-slider", {
    grabCursor:true,
    loop:true,
    autoheight:true,
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); //Tento kód vytváří Swiper pro .menu-slider s funkcemi: uchopení kurzoru, nekonečný loop, automatická výška a centrovaní. Taky obsahuje paginaci s možností kliknutí.

//formular a AJAX

$(document).ready(function () {
  // Intercept form submission
  $('#rezervace-form').submit(function (e) {
      // pojisteni proti zpracovani standardni cestou
      e.preventDefault();

      var formData = $(this).serialize();

      // AJAX pokyn
      $.ajax({
          type: 'POST',
          url: '../data/rezervace.php',
          data: formData,
          success: function (response) {
              console.log(response);
          },
          error: function (error) {
              console.error('Error:', error);
          }
      });
  });
});

var swiper = new Swiper(".food-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
}); //Tento kód spustí Swiper pro review-slider s funkcemi: uchopení kurzoru, nekonečný loop, centrování a responsivní zobrazení. 

let previewContainer1 = document.querySelector('.review-preview-container');
let previewBox1 = previewContainer.querySelectorAll('.review-preview');

document.querySelectorAll('.review .slide').forEach(review => {
  review.onclick = () =>{
    previewContainer1.style.display = 'flex';
    let name = review.getAttribute('data-name');
    previewBox1.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
}); //Kód zajišťuje, že při kliknutí na každý prvek s třídou review .slide, se zobrazí náhled jídla. Každý prvek nese atribut data-name, který se porovná s atributem data-target v náhledech jídla a případně aktivuje odpovídající náhled.

previewContainer1.querySelector('#close-preview').onclick = () =>{
  previewContainer1.style.display = 'none';
  previewBox1.forEach(close =>{
    close.classList.remove('active');
  });
}; //Kód při kliknutí na prvek s id close-preview v rámci prvku previewContainer skryje kontejner s náhledem jídla a odebrá všechny třídy active z prvků previewBox. 

var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop:true,
  autoheight:true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//odpocet a zobrazeni poledniho menu


document.addEventListener('DOMContentLoaded', function () {
  const lunchSpecialDiv = document.getElementById('lunchSpecial');
  const closeBtn = document.getElementById('closeBtn');
  
  function isLunchTime() {
      const now = new Date();
      const hours = now.getHours();
      const timezoneOffset = now.getTimezoneOffset() / 60;

      return hours >= 11 + timezoneOffset && hours <= 15 + timezoneOffset;
  }

  
  function updateLunchSpecial() {
      if (isLunchTime()) {
          lunchSpecialDiv.style.display = 'block';
          setTimer();
      } else {
          lunchSpecialDiv.style.display = 'none';
      }
  }

  function setTimer() {
      const endDate = new Date();
      endDate.setHours(14);
      endDate.setMinutes(0);
      endDate.setSeconds(0);

      const now = new Date();
      const timeDifference = endDate - now;

      displayTimer(timeDifference);

      
      const timerInterval = setInterval(function () {
          const timeDifference = endDate - new Date();
          displayTimer(timeDifference);

          
          if (timeDifference <= 0) {
              clearInterval(timerInterval);
              lunchSpecialDiv.style.display = 'none';
              setTimeout(function () {
                  updateLunchSpecial();
              }, 180000);
          }
      }, 1000);
  }

  function displayTimer(timeDifference) {
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById('timer').innerText = `Zbývá: ${hours}h ${minutes}m`;
  }

  closeBtn.addEventListener('click', function () {
      lunchSpecialDiv.style.display = 'none';
      setTimeout(function () {
          updateLunchSpecial();
      }, 180000);
  });

  updateLunchSpecial();
  setInterval(updateLunchSpecial, 60000);
});