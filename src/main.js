const $SA = (selector) => document.querySelectorAll(selector);
const $$ = (selector) => document.getElementById(selector);
const $S = (selector) => document.querySelector(selector);

$(".element").on("click", function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  $("html, body").animate({ scrollTop: $(href).offset().top }, 750);
});

const btn = $$("btn");
btn.addEventListener("click", () => {
  ul = $S(".ul");
  ul.classList.toggle("ul-click");
});

// btn-top //

var button = $$("btn-top");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 500) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
};

button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Click - li //

var lis = $SA("li");
lis.forEach(function (e) {
  e.addEventListener("click", () => {
    ul = $S(".ul");
    ul.classList.toggle("ul-click");
  });
});
