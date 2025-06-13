const productElements = document.querySelectorAll('.collection-list li');
const interactContainer = document.querySelector('.interaction-preview');
const previewBoxes = document.querySelectorAll('.preview');
const previewViewers = document.querySelectorAll('#product_viewer');

productElements.forEach((product, index) => {
  product.addEventListener('click', () => {
    const name = product.getAttribute('data-name');

    previewBoxes.forEach((preview, j) => {
      const target = preview.getAttribute('data-target');

      if (target === name) {
        // Show the matching preview
        preview.classList.add('active');
        interactContainer.style.display = 'flex';

        // Setup close button
        const closeBtn = preview.querySelector('.fa-times');
        closeBtn.onclick = () => {
          preview.classList.remove('active');
          interactContainer.style.display = 'none';
        };

        const viewer = previewViewers[j];
        if (viewer && viewer.childElementCount === 0) {
          const productViewer = new ProductViewer({
            element: viewer,
            imagePath: `./assets/NV01CL0${index}`,
            filePrefix: 'IMG00',
            fileExtension: '.png'
          });

          productViewer.once('loaded', () => {
            productViewer.animate360();
          });
        }
      } else {
        preview.classList.remove('active');
      }
    });
  });
});
