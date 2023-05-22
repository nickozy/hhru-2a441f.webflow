window.onscroll = function () {
  scrollFunction();
};
const body = document.querySelector("body");
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    body.classList.add("scrollwhite");
  } else {
    body.classList.remove("scrollwhite");
  }
}
