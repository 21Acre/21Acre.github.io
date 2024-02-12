const images = [
  '/img/astar (1).jpeg',
  '/img/astar (2).jpeg',
  '/img/astar (3).jpeg',
  '/img/astar (4).jpeg',
  '/img/astar (5).jpeg',
  '/img/astar (6).jpeg',
  '/img/astar (7).jpeg',
  '/img/astar (8).jpeg',
  '/img/astar (9).jpeg',
  '/img/astar (10).jpeg'
];

const imageContainer = document.getElementById('image-container');
let currentIndex = 0;
let imagesLoaded = 0;

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
      // Increment the count of loaded images
      imagesLoaded++;
      // Show the first image and start slideshow if all images are loaded
      if (imagesLoaded === images.length) {
        img.style.display = 'block';
        // Set interval to transition every 2 seconds
        setInterval(showNextImage, 2000);
      } else {
        img.style.display = 'none';
      }
    };
  });
};
