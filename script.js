/*--------------------------------Desktop Titel Bild------------------------------------------------------------*/ 


document.addEventListener('DOMContentLoaded', function () {
  var mobileHoverElement = document.getElementById('mobileHoverElement');
  var additionalTextElements = document.querySelectorAll('.PlanarFeedtrough .hidden-text');
  var isMouseOver = false;

  function toggleTouchClass() {
      mobileHoverElement.classList.toggle('touch', isMouseOver);
  }

  function toggleAdditionalTextHoverClass() {
      additionalTextElements.forEach(function (element) {
          element.classList.toggle('hovered', isMouseOver);
      });
  }

  function handleMouseEnter() {
      isMouseOver = true;
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  }

  function handleMouseLeave() {
      isMouseOver = false;
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  }

  function handleMouseMove() {
      if (!isMouseOver) {
          handleMouseEnter();
      }
  }

  mobileHoverElement.addEventListener('touchstart', function (event) {
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  });

  mobileHoverElement.addEventListener('touchend', function (event) {
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  });

  mobileHoverElement.addEventListener('mouseover', handleMouseEnter);
  mobileHoverElement.addEventListener('mouseout', handleMouseLeave);
  mobileHoverElement.addEventListener('mousemove', handleMouseMove);
});





/*--------------------------------Desktop Mobile------------------------------------------------------------*/ 





document.addEventListener('DOMContentLoaded', function () {
  var mobileHoverElement = document.getElementById('mobileHoverElement');
  var additionalTextElements = document.querySelectorAll('.PlanarFeedtrough .hidden-text');
  var isTouchActive = false;

  function toggleTouchClass() {
      mobileHoverElement.classList.toggle('touch', isTouchActive);
  }

  function toggleAdditionalTextHoverClass() {
      additionalTextElements.forEach(function (element) {
          element.classList.toggle('hovered', isTouchActive);
      });
  }

  function handleTouchStart() {
      isTouchActive = true;
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  }

  function handleTouchEnd() {
      isTouchActive = false;
      toggleTouchClass();
      toggleAdditionalTextHoverClass();
  }

  mobileHoverElement.addEventListener('touchstart', handleTouchStart);
  mobileHoverElement.addEventListener('touchend', handleTouchEnd);
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
  var isMobileView = window.innerWidth <= 1200; // Setzen Sie hier Ihre Grenze für den Übergang zur mobilen Ansicht

  var activateItem = function (index) {
    var item = timelineItems[index];
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
    item.querySelector('.media.hovered').style.backgroundColor = 'rgb(0, 85, 95)';
    pElement.style.color = 'rgb(160, 220, 230)';

    // Fett machen, wenn das Element aktiviert ist
    if (dateElement) {
      dateElement.classList.add('active');
    }
  };

  var deactivateItem = function (index) {
    var item = timelineItems[index];
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

  var handleDesktopHover = function () {
    timelineItems.forEach(function (item, index) {
      item.addEventListener('mouseenter', function () {
        // Deaktiviere alle anderen Elemente
        timelineItems.forEach(function (otherItem, otherIndex) {
          if (otherIndex !== index) {
            deactivateItem(otherIndex);
          }
        });

        // Aktiviere das aktuelle Element
        activateItem(index);
      });

      item.addEventListener('mouseleave', function () {
        // Deaktiviere das aktuelle Element beim Verlassen
        deactivateItem(index);
      });
    });
  };

  var handleMobileScroll = function () {
    if (!isScrolling) {
      isScrolling = true;

      // Deaktiviere das aktuelle Element
      deactivateItem(currentIndex);

      // Überprüfe, welche Elemente sichtbar sind
      timelineItems.forEach(function (item) {
        var rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.6 && rect.bottom >= 0) {
          currentIndex = Array.from(timelineItems).indexOf(item);
        }
      });

      // Aktiviere das nächste Element
      activateItem(currentIndex);

      // Warten Sie, bevor das automatische Aktivieren erneut möglich ist
      setTimeout(function () {
        isScrolling = false;
      }, 200); // Ändern Sie die Timeout-Dauer nach Bedarf
    }
  };

  // Initial aktiviere das erste Element entsprechend dem Viewport
  if (isMobileView) {
    activateItem(currentIndex);
  } else {
    handleDesktopHover();
  }

  // Füge einen Event-Listener zum Stoppen der automatischen Aktivierung bei Scrollen hinzu
  window.addEventListener('scroll', function () {
    if (isMobileView) {
      handleMobileScroll();
    }
  });

  // Event-Listener für den Wechsel zwischen Desktop- und Mobilansicht
  window.addEventListener('resize', function () {
    isMobileView = window.innerWidth <= 1200;

    // Wenn die Ansicht wechselt, deaktiviere alle Elemente und aktiviere das erste Element neu
    timelineItems.forEach(function (item, index) {
      deactivateItem(index);
    });

    activateItem(currentIndex);

    // Ändere das Event-Handling je nach Ansicht
    if (isMobileView) {
      window.removeEventListener('mousemove', handleDesktopHover);
      window.addEventListener('scroll', handleMobileScroll);
    } else {
      window.removeEventListener('scroll', handleMobileScroll);
      handleDesktopHover();
    }
  });
});













/*-----------------------------Worldemissions---------------------------------------------------------------*/ 







document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("image-gallery");
  const images = [];
  const imageCount = 2; // Anzahl der Bilder auf 9 erhöhen
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






/*--------------------------------colaps------------------------------------------------------------*/ 



  // JavaScript to prevent automatic collapsing
  $('.collapse').on('hide.bs.collapse', function (e) {
    if ($(this).hasClass('manual-collapse')) {
      return false;
    }
  });



  
/*-----------------------------Battery connection---------------------------------------------------------------*/ 











const batteryImage = document.getElementById('batteryImage');
const kipperImage = document.getElementById('kipperImage');
const antriebImage = document.getElementById('antriebImage');
const automatImage = document.getElementById('automatImage'); // Neues Bild-Element für Automat






let batteryCurrentImageIndex = 0;
let kipperCurrentImageIndex = 0;
let antriebCurrentImageIndex = 0;
let automatCurrentImageIndex = 0; // Neuer Index für Automat
let isAnimatingBattery = false;
let isAnimatingKipper = false;
let isAnimatingAntrieb = false;
let isAnimatingAutomat = false; // Neue Variable für Automat

function animateAutomatImages() {
    isAnimatingAutomat = true;
    const maxImages = 5; // Anzahl der Automat-Bilder

    function changeImage() {
        const paddedIndex = String(automatCurrentImageIndex).padStart(4, '0');
        automatImage.src = `images/automat/automat.${paddedIndex}.png`;

        if (automatCurrentImageIndex < maxImages) {
            automatCurrentImageIndex++;
            setTimeout(changeImage, 60);
        } else {
            setTimeout(() => {
                resetAutomatImage();
                isAnimatingAutomat = false;
            }, 2000);
        }
    }

    changeImage();
}

function resetAutomatImage() {
    automatCurrentImageIndex = 0;
    automatImage.src = 'images/automat/automat.0000.png';
}

function handleAutomatImageInteraction() {
    if (!isAnimatingAutomat) {
        animateAutomatImages();
    } else {
        resetAutomatImage();
    }
}

function animateBatteryImages() {
    isAnimatingBattery = true;
    const maxImages = 6;

    function changeImage() {
        const paddedIndex = String(batteryCurrentImageIndex).padStart(4, '0');
        batteryImage.src = `images/battery_connection/battery.${paddedIndex}.png`;

        if (batteryCurrentImageIndex < maxImages) {
            batteryCurrentImageIndex++;
            setTimeout(changeImage, 200);
        } else {
            setTimeout(() => {
                resetBatteryImage();
                isAnimatingBattery = false;
            }, 2000);
        }
    }

    changeImage();
}

function resetBatteryImage() {
    batteryCurrentImageIndex = 0;
    batteryImage.src = 'images/battery_connection/battery.0000.png';
}

function animateKipperImages() {
    isAnimatingKipper = true;
    const maxImages = 6;

    function changeImage() {
        const paddedIndex = String(kipperCurrentImageIndex).padStart(4, '0');
        kipperImage.src = `images/kipper/kipper.${paddedIndex}.png`;

        if (kipperCurrentImageIndex < maxImages) {
            kipperCurrentImageIndex++;
            setTimeout(changeImage, 60);
        } else {
            setTimeout(() => {
                resetKipperImage();
                isAnimatingKipper = false;
            }, 2000);
        }
    }

    changeImage();
}

function resetKipperImage() {
    kipperCurrentImageIndex = 0;
    kipperImage.src = 'images/kipper/kipper.0000.png';
}

function animateAntriebImages() {
    isAnimatingAntrieb = true;
    const maxImages = 10; // Anzahl der Antriebsbilder

    function changeImage() {
        const paddedIndex = String(antriebCurrentImageIndex).padStart(4, '0');
        antriebImage.src = `images/antrieb/antrieb.${paddedIndex}.png`;

        if (antriebCurrentImageIndex < maxImages) {
            antriebCurrentImageIndex++;
            setTimeout(changeImage, 60);
        } else {
            setTimeout(() => {
                resetAntriebImage();
                isAnimatingAntrieb = false;
            }, 2000);
        }
    }

    changeImage();
}

function resetAntriebImage() {
    antriebCurrentImageIndex = 0;
    antriebImage.src = 'images/antrieb/antrieb.0000.png';
}

function handleBatteryImageInteraction() {
    if (!isAnimatingBattery) {
        animateBatteryImages();
    } else {
        resetBatteryImage();
    }
}

function handleKipperImageInteraction() {
    if (!isAnimatingKipper) {
        animateKipperImages();
    } else {
        resetKipperImage();
    }
}

function handleAntriebImageInteraction() {
    if (!isAnimatingAntrieb) {
        animateAntriebImages();
    } else {
        resetAntriebImage();
    }
}




// Mobile Ansicht
batteryImage.addEventListener('click', handleBatteryImageInteraction);
kipperImage.addEventListener('click', handleKipperImageInteraction);
antriebImage.addEventListener('click', handleAntriebImageInteraction);
automatImage.addEventListener('click', handleAutomatImageInteraction); // Hinzugefügt

// Desktop Ansicht
batteryImage.addEventListener('mouseover', handleBatteryImageInteraction);
batteryImage.addEventListener('mouseout', resetBatteryImage);

kipperImage.addEventListener('mouseover', handleKipperImageInteraction);
kipperImage.addEventListener('mouseout', resetKipperImage);

antriebImage.addEventListener('mouseover', handleAntriebImageInteraction);
antriebImage.addEventListener('mouseout', resetAntriebImage);

automatImage.addEventListener('mouseover', handleAutomatImageInteraction); // Hinzugefügt
automatImage.addEventListener('mouseout', resetAutomatImage); // Hinzugefügt
