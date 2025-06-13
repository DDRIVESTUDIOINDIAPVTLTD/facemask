document.addEventListener("DOMContentLoaded", () => {
  const detail = document.querySelector(".product-container");
  const productId = new URLSearchParams(window.location.search).get("id");
  const btn = document.querySelector(".btn");
  const interactContainer = document.querySelector(".interaction-preview");
  const preview = document.querySelector(".interaction-preview .preview");
  const viewer = document.querySelector("#product_viewer");

  if (!detail || !productId || !btn || !preview || !viewer) return;

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("product-imgs");

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const viewport = document.createElement("ol");
  viewport.classList.add("carousel__viewport");
  viewport.id = "carouselViewport";

  fetch("./products.json")
    .then((response) => response.json())
    .then((products) => {
      const product = products.find((p) => p.name === productId);

      if (product) {
        const imageCount = product.original;

        for (let i = 0; i < imageCount; i++) {
          const li = document.createElement("li");
          li.classList.add("carousel__slide");

          const slideImg = document.createElement("img");
          slideImg.src = `./assets/${productId}/original/${productId}_${i}.webp`;
          slideImg.alt = `Slide ${i + 1}`;
          slideImg.style.width = "100%";
          slideImg.style.height = "auto";

          li.appendChild(slideImg);
          viewport.appendChild(li);
        }
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }

      carousel.appendChild(viewport);
      imgDiv.appendChild(carousel);

      const videoDiv = document.createElement("div");
      videoDiv.classList.add("product-content");

      const video = document.createElement("video");
      video.src = `./assets/${productId}/${productId}.mp4`;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.id = "product-video";
      video.onerror = () => {
        video.style.display = "none";
      };
      videoDiv.appendChild(video);

      detail.appendChild(imgDiv);
      detail.appendChild(videoDiv);

      // === Auto-scroll functionality ===
      const slides = viewport.children;
      let currentSlide = 0;

      function goToSlide(index) {
        slides[index].scrollIntoView({ behavior: "smooth", inline: "start" });
      }

      setInterval(() => {
        if (slides.length === 0) return;
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
      }, 2000);
    });

  btn.addEventListener("click", () => {
    interactContainer.style.display = "flex";
    preview.style.display = "flex";
    preview.style.background = "#ffffff";

    const loadingIndicator = document.getElementById("loading");
    loadingIndicator.style.display = "flex";

    if (viewer.childElementCount === 0) {
      const productViewer = new ProductViewer({
        element: viewer,
        imagePath: `./assets/${productId}/sequence`,
        filePrefix: "IMG00",
        fileExtension: ".jpg",
      });

      productViewer.once("loaded", () => {
        loadingIndicator.style.display = "none";
        preview.style.background = "#e3e3e4";
        productViewer.animate360();
      });
    } else {
      loadingIndicator.style.display = "none";
    }
  });

  const closeBtn = preview.querySelector(".fas.fa-times");
  closeBtn.addEventListener("click", () => {
    preview.style.display = "none";
    interactContainer.style.display = "none";
  });
});
