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











document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-viewport");
      } else {
        entry.target.classList.remove("in-viewport");
      }
    });
  }, { threshold: 0.5 });

  var timelineItems = document.querySelectorAll('.timeline-v2>li');

  timelineItems.forEach(function (item) {
    observer.observe(item);
  });
});
















document.addEventListener('DOMContentLoaded', function () {
  var timelineItems = document.querySelectorAll('.timeline-v2 > li');

  var observerOptions = {
    root: null,
    rootMargin: '-40%',
    threshold: 0.11
  };

  var observer = new IntersectionObserver(handleIntersection, observerOptions);

  timelineItems.forEach(function (item) {
    // Ausschließen der "Heute"-Elemente
    if (!item.classList.contains('today')) {
      observer.observe(item);
    }
  });

  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      var item = entry.target;
      var pElement = item.querySelector('.media.hovered .media-body p');
      var overlayImage = item.querySelector('.overlay-image-2');

      // Ausschließen der "Heute"-Elemente
      if (!item.classList.contains('today')) {
        if (entry.isIntersecting) {
          // Element ist im Viewport
          item.classList.remove('not-in-viewport');
          item.classList.add('in-viewport'); // Hinzufügen der Klasse 'in-viewport'
          console.log('Element is in the viewport:', item);
        } else {
          // Element ist nicht im Viewport
          item.classList.remove('in-viewport'); // Entfernen der Klasse 'in-viewport'
          item.classList.add('not-in-viewport');
          console.log('Element is NOT in the viewport:', item);
        }

        // Füge hier den Code hinzu, um die Änderungen basierend auf dem Scroll-Status vorzunehmen
        if (entry.isIntersecting) {
          // Änderungen, wenn das Element sichtbar ist
          if (overlayImage) {
            overlayImage.style.opacity = 0;
          }
          item.querySelector('.media.hovered').style.backgroundColor = 'rgb(0, 65, 65)';
          pElement.style.color = 'rgb(160, 220, 230)';
          // Füge hier weitere Änderungen hinzu, die du basierend auf dem Scroll-Status vornehmen möchtest
        } else {
          // Änderungen, wenn das Element nicht sichtbar ist
          if (overlayImage) {
            overlayImage.style.opacity = 1;
          }
          item.querySelector('.media.hovered').style.backgroundColor = ''; // Setze den Hintergrund zurück
          pElement.style.color = ''; // Setze die Textfarbe zurück
          // Füge hier weitere Änderungen hinzu, die du basierend auf dem Scroll-Status vornehmen möchtest
        }
      }
    });
  }
});
