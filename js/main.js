const button = document.querySelector(".video-btn");
const scVideo = document.querySelector(".video");
const video = document.querySelector("#video");

button.addEventListener("click", function () {
    button.classList.add("active");
    scVideo.classList.add("hide");
    playclip(video);
});

function playclip(media) {
    media.play()
}

$(document).ready(function () {
    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    })
});