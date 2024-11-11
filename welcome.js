document.addEventListener("DOMContentLoaded", () => {
    const popups = document.querySelectorAll(".popup-text");
    popups.forEach(popup => {
        popup.style.animationPlayState = "running";
    });
});
