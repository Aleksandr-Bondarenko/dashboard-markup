"use strict";
const viewportWidth = document.documentElement.clientWidth;

const refs = {
  sideBar: document.querySelector(".side-bar"),
  navMenuList: document.querySelector(".nav-menu__list"),
  navMenuItems: document.querySelectorAll(".nav-menu__item"),
  mainContent: document.querySelector(".main-content"),
  backBtn: document.querySelector(".back-btn"),
};

const { sideBar, navMenuList, navMenuItems, mainContent, backBtn } = refs;

navMenuList.addEventListener("click", navigationHandler);
backBtn.addEventListener("click", backBtnHandler);

function navigationHandler(event) {
  event.preventDefault();

  if (viewportWidth <= 430) {
    sideBar.classList.add("side-bar--hidden");
    mainContent.classList.add("main-content--show");
  }

  if (sideBar.classList.contains("side-bar--hidden")) {
    backBtn.classList.remove("back-btn--hidden");
  }

  //====================
  if (event.currentTarget !== event.target) {
    navMenuItems.forEach((el) => el.classList.remove("nav-menu__item--accent"));
    event.target.parentNode.classList.add("nav-menu__item--accent");
  }

  // console.log(">>>", event.target.textContent);
}

function backBtnHandler() {
  sideBar.classList.remove("side-bar--hidden");

  mainContent.classList.remove("main-content--show");

  if (!sideBar.classList.contains("side-bar--hidden")) {
    backBtn.classList.add("back-btn--hidden");
  }

  if (viewportWidth > 430) {
    navMenuItems.forEach((el) => el.classList.remove("nav-menu__item--accent"));
  }
}
