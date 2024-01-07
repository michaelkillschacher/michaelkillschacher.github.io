document.addEventListener('DOMContentLoaded', function () {
    var mobileHoverElement = document.getElementById('mobileHoverElement');

    mobileHoverElement.addEventListener('mousedown', function () {
        mobileHoverElement.classList.add('touch');
        console.log('Mousedown Event');
    });

    mobileHoverElement.addEventListener('mouseup', function () {
        mobileHoverElement.classList.remove('touch');
        console.log('Mouseup Event');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var mobileHoverElement = document.getElementById('mobileHoverElement');

    mobileHoverElement.addEventListener('pointerdown', function () {
        mobileHoverElement.classList.add('touch');
        console.log('Pointerdown Event');
    });

    mobileHoverElement.addEventListener('pointerup', function () {
        mobileHoverElement.classList.remove('touch');
        console.log('Pointerup Event');
    });
});
