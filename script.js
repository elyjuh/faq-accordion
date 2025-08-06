document.querySelectorAll("details").forEach(detail => {
    const plusIcon = detail.querySelector(".plus-icon");
    const minusIcon = detail.querySelector(".minus-icon");

    detail.addEventListener("toggle", () => {
        if (detail.open) {
            plusIcon.style.opacity = "0";
            minusIcon.style.opacity = "1";
        } else {
            plusIcon.style.opacity = "1";
            minusIcon.style.opacity = "0";
        }
    });
});
