function clearBorders() {
    const elements = document.getElementsByClassName("border");
    for (const element of elements) {
        element.classList.remove("border");
    }
}

function setMainImage(imageNumber) {
    const mainImage = document.getElementById("mainImage");
    const descriptionBox = document.getElementById("mainDescription");

    switch (imageNumber) {
        case 1:
            mainImage.src = "https://mimo.app/i/kittles.png";
            descriptionBox.textContent = "Kittles: A delightful picture of a playful kitten.";
            break;
        case 2:
            mainImage.src = "https://mimo.app/i/babaganoosh.png";
            descriptionBox.textContent = "Babaganoosh: A mysterious image with a blend of colors.";
            break;
        case 3:
            mainImage.src = "https://mimo.app/i/underwater.png";
            descriptionBox.textContent = "Underwater: Dive into the deep blue and discover the secrets of the ocean.";
            break;
        case 4:
            mainImage.src = "https://mimo.app/i/lighthouse.png";
            descriptionBox.textContent = "Lighthouse: Standing tall, guiding ships through the night.";
            break;
        case 5:
            mainImage.src = "https://mimo.app/i/market.png";
            descriptionBox.textContent = "Market: A bustling marketplace filled with colors and energy.";
            break;
        default:
            console.error("Unexpected image number:", imageNumber);
            break;
    }
}
