

document.addEventListener('DOMContentLoaded', function () {
    var mobileHoverElement = document.getElementById('mobileHoverElement');
    var additionalTextElements = document.querySelectorAll('.PlanarFeedtrough .hidden-text');

    function toggleTouchClass() {
        mobileHoverElement.classList.toggle('touch');
        console.log('Touch Event');
    }

    mobileHoverElement.addEventListener('touchstart', toggleTouchClass);
    mobileHoverElement.addEventListener('touchend', toggleTouchClass);
    mobileHoverElement.addEventListener('mouseover', toggleTouchClass);
    mobileHoverElement.addEventListener('mouseout', toggleTouchClass);
});
