import albumList from "../albumsDb.js";

const createAlbums = () => {
  const container = document.querySelector(".albums");

  for (const album of albumList) {
    if (filter(Number(album.price), album.genre.toLowerCase())) continue;

    const albumContainer = container.appendChild(document.createElement("div"));
    albumContainer.classList.add("album", "colContainer");

    const img = albumContainer.appendChild(document.createElement("img"));
    img.src = album.img;

    const p = albumContainer.appendChild(document.createElement("p"));
    p.textContent = album.title;

    const about = albumContainer.appendChild(document.createElement("div"));
    about.classList.add("about", "rowContainer");

    const artist = about.appendChild(document.createElement("span"));
    artist.className = "artist";
    artist.textContent = album.band;

    const genre = about.appendChild(document.createElement("span"));
    genre.className = "genre";
    genre.textContent = album.genre;

    const buy = albumContainer.appendChild(document.createElement("div"));
    buy.classList.add("buy", "rowContainer");

    const price = buy.appendChild(document.createElement("span"));
    price.className = "price";
    price.textContent = `R$ ${album.price}`;

    const buyButton = buy.appendChild(document.createElement("button"));
    buyButton.textContent = "Comprar";
  }
};

const filter = (price, genre) => {
  let priceFilter = localStorage.getItem("desiredPrice") ?? 0;
  priceFilter = Number(priceFilter);

  let genreFilter = localStorage.getItem("desiredGenres") || "all";
  if (genreFilter !== "all") genreFilter = genreFilter.split(",");

  if (priceFilter === 0 && genreFilter === "all") return false;
  if (priceFilter >= price) {
    if (genreFilter.includes(genre) || genreFilter === "all") return false;
  }

  return true;
};

export default createAlbums;
