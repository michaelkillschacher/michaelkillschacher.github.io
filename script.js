document.addEventListener('DOMContentLoaded', function () {
  var mobileHoverElement = document.getElementById('mobileHoverElement');
  var additionalTextElements = document.querySelectorAll('.PlanarFeedtrough .hidden-text');

  function toggleTouchClass() {
      mobileHoverElement.classList.toggle('touch');
      console.log('Touch Event');
  }

  function toggleAdditionalTextHoverClass() {
      additionalTextElements.forEach(function (element) {
          element.classList.toggle('hovered');
      });
  }

  mobileHoverElement.addEventListener('touchstart', function (event) {
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  });

  mobileHoverElement.addEventListener('touchend', function (event) {
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  });

  mobileHoverElement.addEventListener('mouseover', function (event) {
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  });

  mobileHoverElement.addEventListener('mouseout', function (event) {
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  });
});





angular.module('app', [])

.filter('sanitize', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
})

.controller('baseController', function() {
  this.notifications = {
    'May 21, 2015': [
      {
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg',
        text: '<strong>Mad Jack</strong> added you to the board <a href="javascript:void(0);">The treasure of the three witches</a>',
        time: '9:40 PM'
      }
    ],
    'May 20, 2015': [
      {
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
        text: '<p><strong>Snuck</strong> commented on <a href="javascript:void(0);">Adventures of the high sees</a></p><p>Can\'t wait to go on this adventure with you, captain. it\'s a honor and a privilege to serve as your first mate..."</p>',
        time: '4:42 PM'
      },
      {
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/alexcican/128.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula posuere ligula at aliquet. Sed ornare, lacus quis hendrerit fringilla, augue quam tincidunt ante, laoreet fringilla elit odio non eros. Sed aliquam augue vitae leo cursus, ut facilisis metus fringilla. Aliquam nisi ipsum, tincidunt a orci ac, fermentum cursus purus. Nunc commodo, odio quis faucibus imperdiet, ante arcu aliquet odio, nec tincidunt sapien tortor quis nisi. Duis rhoncus sapien dolor, sed efficitur orci viverra a. Etiam eget mollis mi. Donec sagittis vulputate enim.',
        time: '1:22 AM'
      },
    ],
    'April 8, 2015': [
      {
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        text: '<p><strong>Angus Dagnabbit</strong> moved <a href="javascript:void(0);">Pirate\'s treasure from</a> <span class="label label-warning">In progress</span> to <span class="label label-success">Done</span></p>',
        time: '2:09 PM'
      }
    ],
    'April 6, 2015': [
      {
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/alexcican/128.jpg',
        text: '<p><strong>Flash Dashing</strong> uploaded 4 new screenshots to the board <a href="javascript:void(0);">Steal Mad Jack\'s treasure again</a></p>',
        time: '4:22 PM'
      },
      {
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg',
        text: 'Aliquam faucibus mauris sit amet blandit placerat. Maecenas interdum sapien ante, ut sollicitudin ex semper convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam id maximus est. Vestibulum ullamcorper semper ante, quis tristique odio aliquam eget. Sed ut luctus augue. Mauris sollicitudin tellus a malesuada ultricies. Fusce purus est, dapibus quis ex ac, egestas ornare orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at consequat lectus.',
        time: '12:20 PM'
      }
    ]
  };
});







/*--------------------------------Zeitstrahl------------------------------------------------------------*/ 





document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("image-gallery");
  const images = [];
  const imageCount = 9; // Anzahl der Bilder auf 9 erhöhen
  const galleryHeight = 600; // Feste Höhe für den Galeriebereich
  let currentIndex = 0;
  let isAnimating = false;

  function addLeadingZeros(number, length) {
    return String(number).padStart(length, '0');
  }

  for (let i = 0; i < imageCount; i++) {
    const imageName = `flipbook_smoke.${addLeadingZeros(i, 4)}.png`;
    images.push(`images/flipbook_world/${imageName}`);
  }

  function preloadImages() {
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i];
    }
  }

  function updateImage(index) {
    gallery.innerHTML = `<img src="${images[index]}" alt="world emissions" style="width: 100%; height: auto;">`;
  }

  function handleScroll() {
    if (isAnimating) {
      return;
    }

    const scrollPosition = window.scrollY || window.pageYOffset;
    const totalScrollHeight = galleryHeight * (imageCount - 1);
    const newImageIndex = Math.floor((scrollPosition / totalScrollHeight) * imageCount);

    if (newImageIndex !== currentIndex) {
      currentIndex = newImageIndex;
      isAnimating = true;

      updateImage(currentIndex);

      // Nach Abschluss der Animation wird isAnimating zurückgesetzt
      setTimeout(function () {
        isAnimating = false;
      }, 500); // Timeout-Wert anpassen, falls erforderlich
    }
  }

  // Setze die Höhe des Galeriebereichs
  gallery.style.height = `${galleryHeight}px`;

  // Event Listener für das Scrollen auf Desktop und mobilen Geräten
  window.addEventListener("scroll", handleScroll);

  // Initialisiere das erste Bild
  updateImage(currentIndex);

  // Lade Bilder vorab
  preloadImages();
});
