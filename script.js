document.querySelectorAll("details").forEach(detail => {
    const icon = detail.querySelector(".detail-icon");

    detail.addEventListener("toggle", () => {
        if (detail.open) {
            icon.src =  "assets/images/icon-minus.svg";
        } else {
            icon.src =  "assets/images/icon-plus.svg";
        }
    });
});
