let header = document.querySelector("header");
let articles = document.querySelector(".articles");
let upBtn = document.querySelector(".up");
window.onscroll = function () {
    if (window.scrollY >= articles.offsetTop) {
        header.classList.add("dawn");
        upBtn.style.right = "20px";
    } else {
        header.classList.remove("dawn");
        upBtn.style.right = "-50px";
    }
}
upBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}