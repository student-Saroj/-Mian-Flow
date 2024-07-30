let images = [
    { src: "image1.jpg", alt: "Image 1" },
    { src: "image2.jpg", alt: "Image 2" },
    { src: "image3.jpg", alt: "Image 3" },
    { src: "image4.jpg", alt: "Image 4" },
    { src: "image5.jpg", alt: "Image 5" }
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-image").src = images[currentIndex].src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("modal-image").src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("modal-image").src = images[currentIndex].src;
}