const mountains = "url('./src/images/mountain-landscape-2031539_1920.jpg')";
const waves = "url('./src/images/wave-1913559_1920.jpg')";
const desert = "url('./src/images/morocco-2349647_1920.jpg')";
const galaxy = "url('./src/images/polar-lights-5858656_1920.jpg')";

const mountains_gradient = 'linear-gradient(to right, rgb(82, 81, 81), #5c0350)';
const waves_gradient = 'linear-gradient(to right, rgb(82, 81, 81), #030c5c)';
const desert_gradient = 'linear-gradient(to right, rgb(82, 81, 81), #753501)';
const galaxy_gradient = 'linear-gradient(to right, rgb(82, 81, 81), #015049)';

const top_half = document.getElementById('sidebar');
const bottom_half = document.getElementById('bottom-half');

top_half.style.backgroundImage = mountains_gradient;
bottom_half.style.backgroundImage = mountains;
let currant_image = "";

document.querySelector('.switch-background-btn').addEventListener('click', function () {

    if (currant_image == "waves") {
        top_half.style.backgroundImage = mountains_gradient;
        bottom_half.style.backgroundImage = mountains;
        currant_image = "mountains";
    }
    else if (currant_image == "mountains") {
        top_half.style.backgroundImage = desert_gradient;
        bottom_half.style.backgroundImage = desert;
        currant_image = "desert";
    }
    else if (currant_image == "galaxy") {
        top_half.style.backgroundImage = waves_gradient;
        bottom_half.style.backgroundImage = waves;
        currant_image = "waves";
    }
    else {
        top_half.style.backgroundImage = galaxy_gradient;
        bottom_half.style.backgroundImage = galaxy;
        currant_image = "galaxy";
    }
});

export default control_images;

