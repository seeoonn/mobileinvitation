let currentIndex = 0;
const images = document.querySelectorAll('.photo');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

function openPopup(index) {
    currentIndex = index;
    popup.style.display = 'flex';
    popupImg.src = images[currentIndex].src;
}

function closePopup() {
    popup.style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    popupImg.src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    popupImg.src = images[currentIndex].src;
}

// Add event listeners to all images
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openPopup(index);
    });
});