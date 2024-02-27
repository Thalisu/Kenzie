import updateAlbums from "../albums/updateAlbums.js";
import priceSlider from "./priceSlider.js";

const handlePriceSlider = () => {
  let isDragging = false;
  const priceSliderContainer = document.querySelector(".priceSliderContainer");
  const price = document.querySelector("#sliderPrice");

  const storedPrice = localStorage.getItem("desiredPrice") ?? "0";
  priceSliderContainer.style.setProperty(
    "--progress-position",
    storedPrice / 300
  );
  price.textContent = storedPrice;

  priceSliderContainer.addEventListener("mousedown", (e) => {
    isDragging = (e.buttons & 1) === 1;
    priceSliderContainer.classList.add("dragging");
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) priceSlider(e, priceSliderContainer, price, isDragging);
  });

  priceSliderContainer.addEventListener("mousemove", (e) =>
    priceSlider(e, priceSliderContainer, price, isDragging)
  );

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      priceSliderContainer.classList.remove("dragging");
      localStorage.setItem("desiredPrice", priceSliderContainer.id);
      updateAlbums();
    }
  });
};

export default handlePriceSlider;
