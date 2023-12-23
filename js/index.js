"use strict";
const viewportWidth = document.documentElement.clientWidth;

const refs = {
  sideBar: document.querySelector(".side-bar"),
  navMenuList: document.querySelector(".nav-menu__list"),
  navMenuItems: document.querySelectorAll(".nav-menu__item"),
  mainContent: document.querySelector(".main-content"),
  backBtn: document.querySelector(".back-btn"),
  tableBody: document.querySelector(".customers-table__body"),
  sections: document.querySelectorAll(".section"),
};

const {
  sideBar,
  navMenuList,
  navMenuItems,
  mainContent,
  backBtn,
  tableBody,
  sections,
} = refs;

navMenuList.addEventListener("click", navigationHandler);
backBtn.addEventListener("click", backBtnHandler);
tableBody.addEventListener("click", statusBtnHandler);

function navigationHandler(event) {
  event.preventDefault();

  if (viewportWidth <= 430) {
    sideBar.classList.add("side-bar--hidden");
    mainContent.classList.add("main-content--show");
  }

  if (sideBar.classList.contains("side-bar--hidden")) {
    backBtn.classList.remove("back-btn--hidden");
  }

  if (event.currentTarget !== event.target) {
    navMenuItems.forEach((el) => el.classList.remove("nav-menu__item--accent"));
    event.target.parentNode.classList.add("nav-menu__item--accent");
  }

  changeSection(event.target.textContent);
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

function statusBtnHandler(event) {
  const { localName, textContent } = event.target;
  if (localName !== "button") return;

  textContent.trim() === "Active"
    ? (event.target.innerText = "Inactive")
    : (event.target.innerText = "Active");

  event.target.classList.toggle("customers-table__status-btn--active");
}

function changeSection(name) {
  sections.forEach((el) => {
    el.classList.remove("section--show");
    el.classList.contains(name.toLowerCase()) &&
      el.classList.add("section--show");
  });
}
