document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".nav-link");
    const filterCards = document.querySelectorAll(".col");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const closeBtn = document.querySelector(".close");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
  
        const filterCategory = this.getAttribute("data-filter");
        console.log("Selected Category:", filterCategory);
  
        filterCards.forEach(card => {
          const cardCategory = card.getAttribute("data-name");
          console.log("Card Category:", cardCategory);
  
          if (filterCategory === "all" || cardCategory === filterCategory) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  
    const images = document.querySelectorAll(".cimage");
    images.forEach(image => {
      image.addEventListener("click", function () {
        lightbox.style.display = "block";
        lightbox.style.transitionDuration = "0.5s";
        lightboxImage.src = this.src;
        const card = this.closest(".col");
        const title = card.querySelector(".card-title").innerText;
        lightboxTitle.innerText = title;
      });
    });
  
    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", function (event) {
      if (event.target !== lightboxImage && event.target !== lightboxTitle) {
        lightbox.style.display = "none";
      }
    });
  });
  