document.addEventListener('DOMContentLoaded', function () {
    var mobileHoverElement = document.getElementById('mobileHoverElement');

    // Event Listener für Touchstart und Touchend auf mobilen Geräten
    mobileHoverElement.addEventListener('touchstart', function () {
        mobileHoverElement.classList.add('touch');
        console.log('Touchstart Event');
    });

    mobileHoverElement.addEventListener('touchend', function () {
        mobileHoverElement.classList.remove('touch');
        console.log('Touchend Event');
    });

    // Event Listener für Hover auf Desktop-Geräten
    mobileHoverElement.addEventListener('mouseover', function () {
        mobileHoverElement.classList.add('touch');
        console.log('Mouseover Event');
    });

    mobileHoverElement.addEventListener('mouseout', function () {
        mobileHoverElement.classList.remove('touch');
        console.log('Mouseout Event');
    });
});
