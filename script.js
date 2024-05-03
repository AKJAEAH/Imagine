document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");

    images.forEach(img => {
        img.addEventListener("mouseenter", function () {
            img.style.border = "2px solid green"; // Yeşil kenar çerçeve
            img.style.padding = "5px"; // Fotoğraf ile kenarlık arasında 5 piksel boşluk
        });

        img.addEventListener("mouseleave", function () {
            img.style.border = "none"; // Kenar çerçevesini kaldır
            img.style.padding = "0"; // Kenarlığı kaldırdığımızda boşluğu sıfırla
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".icon");
    const popup = document.querySelector("#popup");
    const closeButton = document.querySelector(".close-button");

    icon.addEventListener("click", function () {
        popup.classList.toggle("show-popup");
        document.querySelector(".container").classList.toggle("blur");
    });

    closeButton.addEventListener("click", function () {
        popup.classList.remove("show-popup");
        document.querySelector(".container").classList.remove("blur");
    });
});
