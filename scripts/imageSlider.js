const images = [
    '/img/advanced-yoga-poses.jpg',
    '/img/basic-yoga.jpg'
  ];

  const imageContainer = document.getElementById('image-container');
  let currentIndex = 0;

  // Function to display the next image
  function showNextImage() {
    // Hide current image
    imageContainer.children[currentIndex].style.display = 'none';

    // Increment index, or go back to 0 if at the end
    currentIndex = (currentIndex + 1) % images.length;

    // Show next image
    imageContainer.children[currentIndex].style.display = 'block';
  }

  // Load images and start slideshow
  window.onload = function() {
    images.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = function() {
        // Append loaded image to container
        imageContainer.appendChild(img);
        // Show the first image
        if (currentIndex === 0) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      };
    });

    // Set interval to transition every 2 seconds
    setInterval(showNextImage, 2000);
  };