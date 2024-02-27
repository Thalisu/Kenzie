const priceSliderUpdate = (e, priceSliderContainer, price, isDragging) => {
  const rect = priceSliderContainer.getBoundingClientRect();
  const percent =
    Math.min(Math.max(0, e.pageX - rect.x), rect.width) / rect.width;
  priceSliderContainer.style.setProperty(
    "--preview-position",
    percent.toString()
  );

  if (isDragging) {
    e.preventDefault();
    priceSliderContainer.style.setProperty(
      "--progress-position",
      percent.toString()
    );
    priceSliderContainer.id = Math.round(300 * percent);
    price.textContent = Math.round(300 * percent);
  }
};

export default priceSliderUpdate;
