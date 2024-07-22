document.querySelectorAll('.logo_slider_group').forEach(element => element.classList.add('enable-logo-animation'));

// NAV HOVER EFFECT

const item_bg = document.querySelector(".nav_item_bg");
const item = document.querySelectorAll(".nav_item");
const item_link = document.querySelectorAll(".nav_item a");

const active_link_select = window.location.pathname.split("/");
const active_link = active_link_select[1].split(".",1);

if (active_link.includes(`index`) || active_link.includes(`contact-form`) || active_link[0] === "") {
  item_bg.style.opacity = `0`;
}

active_link_selector();

function active_link_selector() {
  item_link.forEach(link => {
      if(link.href.includes(`${active_link}`)) {
        item_bg.style.opacity = `1`;
        item_bg.style.width = `${link.parentElement.offsetWidth}px`;
        item_bg.style.left = `${link.parentElement.offsetLeft}px`;
      }
      if (active_link.includes(`index`) || active_link.includes(`contact-form`) || active_link[0] === "") {
        item_bg.style.opacity = `0`;
        item_bg.style.width = `${link.parentElement.offsetWidth}px`;
        item_bg.style.left = `${link.parentElement.offsetLeft}px`;
      }
  });
}

item.forEach((elem) => {
  elem.addEventListener("mouseenter", (e) => {
    item_bg.style.width = `${e.currentTarget.offsetWidth}px`;
    item_bg.style.left = `${e.currentTarget.offsetLeft}px`;
    item_bg.style.opacity = `1`;
  });

  elem.addEventListener("mouseleave", () => {
    active_link_selector();
  });
});

// BURGER NAVBAR

const burgerMenuBg = document.querySelector('.burger_menu_bg');
const bgBlur = document.querySelector('.bg_blur');
const burgerBtn = document.querySelector('.burger_navbar_container');
const body = document.querySelector('body');
const burgerContent = document.querySelectorAll('.burger_menu_bg > *');
let burgerMenuOpen = false;

for (let i = 0; i < burgerContent.length; i++) {
        burgerContent[i].style.opacity = '1';
    }

burgerBtn.addEventListener('click', () => {
  if (!burgerMenuOpen) {
    burgerBtn.classList.add('burger_menu_open');
    bgBlur.style.display = 'block';
    body.style.overflow = 'hidden';
    burgerMenuBg.style.height = '90vh';
    burgerContent[0].style.display = 'flex';
    burgerContent[1].style.display = 'flex';
    burgerContent[2].style.display = 'block';
    burgerContent[3].style.display = 'flex';
    burgerMenuOpen = true;
  } else {
    bgBlur.style.display = 'none';
    body.style.overflow = 'visible';
    burgerMenuBg.style.height = '0vh';
    burgerBtn.classList.remove('burger_menu_open');
    burgerMenuOpen = false;
    for (let i = 0; i < burgerContent.length; i++) {
        burgerContent[i].style.display = 'none';
    }
  }
});

// PLAY TITLE VIDEO

// const play_button = document.getElementById('play_button');
// const pause_button = document.getElementById('pause_button');
// const title_video = document.getElementById('video');
//
// if (play_button) {
//     play_button.onclick = function () {
//         title_video.style.display = 'block';
//         title_video.play();
//         play_button.style.display = 'none';
//         pause_button.style.display = 'block';
//     };
// }
//
// if (pause_button) {
//     pause_button.onclick = function () {
//         title_video.style.display = 'none';
//         title_video.pause();
//         play_button.style.display = 'block';
//         pause_button.style.display = 'none';
//     };
// }
//
// // hide when mouse does not move
//
// $("#pause_button").css("opacity", "1");
// var i = null;
// $(".title_banner").mousemove(function() {
//     clearTimeout(i);
//     $("#pause_button").css("opacity", "1");
//     i = setTimeout('$("#pause_button").css("opacity", "0");', 2000);
// }).mouseleave(function() {
//     $("#pause_button").css("opacity", "0");
//     clearTimeout(v);
// });
//
// var v = null;
// $("#video").mousemove(function() {
//     clearTimeout(v);
//     $("#video").css("cursor", "default");
//     v = setTimeout('$("#video").css("cursor", "none");', 2000);
// });

// SOLUTION PERSPECTIVE EFFECT

const solutionElements = document.querySelectorAll('.solution_bar_item_absolute');

for (let i = 0; i < solutionElements.length; i++) {
  if (window.innerWidth < 1362) {
    solutionElements[i].classList.remove("tilt");
  } else {
    solutionElements[i].classList.add("tilt");
  }
}

$('.tilt').tilt({
  speed: 2000,
  maxTilt: 5,
  scale: 1.1,
  glare: true,
  maxGlare: .5
});

// Other input disable/enable CONTACT FORM

var otherInput = document.getElementById("otherinput");
var otherChecker = document.getElementById("otherchecker");

if (otherChecker && otherInput) {

  otherChecker.checked = false;
  otherInput.disabled = true;

  otherChecker.addEventListener('change', function () {
    if (this.checked) {
      otherInput.disabled = false;
    } else {
      otherInput.disabled = true;
    }
  });
}

// invalid_form_checker

let valid_text = document.querySelectorAll('.valid_text');
let valid_checkbox = document.querySelector('.valid_checkbox');
let valid_checkbox_faq = document.querySelector('.valid_checkbox_faq');
let valid_email = document.querySelector('.valid_email');
let valid_post_code = document.querySelector('.valid_post_code');
let valid_checkbox_about = document.querySelectorAll('.valid_checkbox_about');
let valid_text_about = document.querySelector('.valid_text_about');
let valid_about_container = document.querySelector('.valid_about_container');
let submit_button = document.querySelector('#submit_button');
let form = document.querySelector('#form');
let phone = document.querySelector('#phone');

function invalid_form_text(input) {
  if (input.value == "") {
      input.style.outline = "2px solid red";
    } else {
      input.style.outline = "none";
      return true;
  }
}

function invalid_form_checker(input) {
  if (input.checked == false) {
      input.style.outline = "2px solid red";
    } else {
      input.style.outline = "none";
      return true;
  }
}

function invalid_form_checker_about(input) {
  if (input.checked == false) {
      return false;
    } else {
      return true;
  }
}

function invalid_about_checkbox_text() {
  if (invalid_form_checker_about(valid_checkbox_about[3]) && valid_text_about.value != ""){
    valid_text_about.style.outline = "none";
    return true;
  } else if (invalid_form_checker_about(valid_checkbox_about[3]) && valid_text_about.value == "") {
    valid_text_about.style.outline = "2px solid red";
    return false;
  }
}

function about_validation() {
  if (invalid_form_checker_about(valid_checkbox_about[0])
     || invalid_form_checker_about(valid_checkbox_about[1])
     || invalid_form_checker_about(valid_checkbox_about[2])
     || invalid_about_checkbox_text() ){
    valid_about_container.style.outline = "none";
    return true;
  } else {
    valid_about_container.style.outline = "2px solid red";
    return false;
  }
}

function validateEmail() {
    let symbols = /\S+@\S+\.\S+/;
    return symbols.test(valid_email.value);
}

function validateEmailMarker() {
  if (validateEmail()) {
    valid_email.style.outline = "none";
    return true;
  } else {
    valid_email.style.outline = "2px solid red";
  }
}

function validatePostCode() {
  let postCode = valid_post_code.value;
  if (!isNaN(postCode) && parseInt(Number(postCode)) == postCode && !isNaN(parseInt(postCode, 10))) {
    valid_post_code.style.outline = "none";
    return true;
  } else {
    valid_post_code.style.outline = "2px solid red";
  }
}

function validatePhone() {
  let phone_number = phone.value;
  if (!isNaN(phone_number) && parseInt(Number(phone_number)) == phone_number && !isNaN(parseInt(phone_number, 10))) {
    phone.style.outline = "none";
    return true;
  } else {
    phone.style.outline = "2px solid red";
  }
}
if (submit_button) {
  submit_button.addEventListener('click', function (event) {
    if ( invalid_form_text(valid_text[0])
      && invalid_form_text(valid_text[1])
      && validateEmailMarker()
      && invalid_form_text(valid_text[2])
      && validatePhone()
      && invalid_form_text(valid_text[3])
      && invalid_form_text(valid_text[4])
      && validatePostCode()
      && invalid_form_text(valid_text[5])
      && invalid_form_text(valid_text[6])
      && invalid_form_text(valid_text[7])
      && invalid_form_text(valid_text[8])
      && invalid_form_text(valid_text[9])
      && about_validation()
      && invalid_form_checker(valid_checkbox)
      && invalid_form_checker(valid_checkbox_faq)
    ){
      form.submit();
    }
  event.preventDefault();
});
}

for (let i = 0; i < valid_text.length; i++) {
  console.log(valid_text[i]);
}

// watch video

let watch_button = document.getElementById("watch_video_button");
let watch_bg = document.getElementsByClassName("watch_video_bg");
let watch_video = document.getElementsByClassName("watch_video_container");
let watch_disable_nav = document.querySelector('header');
let video_file = document.getElementById('watch_video_file');
let close_video = document.getElementsByClassName('watch_video_close');

if (watch_button) {

  watch_button.addEventListener('click', function () {
    watch_bg[0].style.display = 'block';
    watch_video[0].style.display = 'block';
    watch_disable_nav.style.display = 'none';
    video_file.play();
  });

  watch_bg[0].addEventListener('click', function () {
    watch_bg[0].style.display = 'none';
    watch_video[0].style.display = 'none';
    watch_disable_nav.style.display = 'block';
    video_file.pause();
  });

  close_video[0].addEventListener('click', function () {
    watch_bg[0].style.display = 'none';
    watch_video[0].style.display = 'none';
    watch_disable_nav.style.display = 'block';
    video_file.pause();
  });
}

// smooth scroll

$(document).ready(function(){
  $(".faq_documentation_menu a").on('click', function(event) {
    let container = $('.faq_documentation_content');

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('.faq_documentation_content').animate({
        scrollTop: $(hash)[0].offsetTop - container[0].offsetTop
      }, 600);
    }
  });
});

function scrollingFunction(item) {
  $('html, body').animate({scrollTop : $("#" + item).offset().top - (window.innerHeight / 3)}, 500);
}



// Location multi-language display

let multilanguage = document.getElementsByClassName('multilanguage');
let multilanguage_burger = document.getElementsByClassName('multilanguage-burger');
var requestUrl = "http://ip-api.com/json";

$.ajax({
  url: requestUrl,
  type: 'GET',
  success: function(json)
  {
    if (json.country === "Slovakia") {
      multilanguage[0].style.visibility = 'visible';
      multilanguage_burger[0].style.visibility = 'visible';
    } else {
      multilanguage[0].style.visibility = 'hidden';
      multilanguage_burger[0].style.visibility = 'hidden';
    }
  },
  error: function(err)
  {
    console.log("Request failed, error= " + err);
  }
});