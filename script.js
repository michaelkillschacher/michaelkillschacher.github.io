document.addEventListener('DOMContentLoaded', function () {
    var mobileHoverElement = document.getElementById('mobileHoverElement');

    // Event Listener für Touchstart und Touchend
    mobileHoverElement.addEventListener('touchstart', function () {
        mobileHoverElement.classList.add('touch');
        console.log('Touchstart Event');
    });

    mobileHoverElement.addEventListener('touchend', function () {
        mobileHoverElement.classList.remove('touch');
        console.log('Touchend Event');
    });
});
