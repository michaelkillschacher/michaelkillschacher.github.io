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



document.addEventListener('DOMContentLoaded', function () {
  var timelineItems = document.querySelectorAll('.timeline-v2 > li.timeline-item');
  var currentIndex = 0;
  var isScrolling = false;

  var activateNextItem = function () {
      var item = timelineItems[currentIndex];
      var overlayImage = item.querySelector('.overlay-image-2');
      var pElement = item.querySelector('.media.hovered .media-body p');
      var dateElement = item.querySelector('.timeline-date');

      // Füge die Klassen "active" hinzu, wenn das Element aktiviert wird
      item.classList.remove('not-in-viewport');
      item.classList.add('in-viewport', 'active');

      // Änderungen, wenn das Element sichtbar ist
      if (overlayImage) {
          overlayImage.style.opacity = 0;
      }
      item.querySelector('.media.hovered').style.backgroundColor = 'rgb(0, 65, 65)'; //hindergrund box
      pElement.style.color = 'rgb(160, 220, 230)';//font
      
      // Fett machen, wenn das Element aktiviert ist
      if (dateElement) {
          dateElement.classList.add('active');
      }
  };

  var deactivateCurrentItem = function () {
      var item = timelineItems[currentIndex];
      var overlayImage = item.querySelector('.overlay-image-2');
      var pElement = item.querySelector('.media.hovered .media-body p');
      var dateElement = item.querySelector('.timeline-date');

      // Entferne die Klassen "active", wenn das Element deaktiviert wird
      item.classList.remove('in-viewport', 'active');
      item.classList.add('not-in-viewport');

      // Änderungen, wenn das Element nicht sichtbar ist
      if (overlayImage) {
          overlayImage.style.opacity = 1;
      }
      item.querySelector('.media.hovered').style.backgroundColor = '';
      pElement.style.color = '';

      // Entferne die Klasse "active" für das Datum
      if (dateElement) {
          dateElement.classList.remove('active');
      }
  };

  var handleScroll = function () {
      if (!isScrolling) {
          isScrolling = true;

          // Deaktiviere das aktuelle Element
          deactivateCurrentItem();

          // Überprüfe, welche Elemente sichtbar sind
          timelineItems.forEach(function (item) {
              var rect = item.getBoundingClientRect();

              if (rect.top < window.innerHeight * 0.6 && rect.bottom >= 0) {
                  currentIndex = Array.from(timelineItems).indexOf(item);
              }
          });

          // Aktiviere das nächste Element
          activateNextItem();

          // Warten Sie, bevor das automatische Aktivieren erneut möglich ist
          setTimeout(function () {
              isScrolling = false;
          }, 200); // Ändern Sie die Timeout-Dauer nach Bedarf
      }
  };

  // Initial aktiviere das erste Element
  activateNextItem();

  // Füge einen Event-Listener zum Stoppen der automatischen Aktivierung bei Scrollen hinzu
  window.addEventListener('scroll', handleScroll);
});







/*-----------------------------Worldemissions---------------------------------------------------------------*/ 





document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("image-gallery");
  const images = [];
  const imageCount = 5; // Anzahl der Bilder anpassen
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

  function updateImage() {
    gallery.innerHTML = `<img src="${images[currentIndex]}" alt="world emissions">`;
  }

  function handleScroll() {
    if (isAnimating) {
      return;
    }

    const scrollPercentage = (currentIndex / (imageCount - 1)) * 100;

    if (scrollPercentage >= 100) {
      currentIndex = 0; // Zurück zum ersten Bild, wenn das letzte erreicht ist
    } else {
      currentIndex++;
    }

    updateImage();
    isAnimating = true;

    // Nach Abschluss der Animation wird isAnimating zurückgesetzt
    setTimeout(function () {
      isAnimating = false;
    }, 500); // Timeout-Wert anpassen, falls erforderlich
  }

  // Event Listener für das Scrollen auf Desktop und mobilen Geräten
  window.addEventListener("scroll", handleScroll);

  // Initialisiere das erste Bild
  updateImage();

  // Lade Bilder vorab
  preloadImages();
});
