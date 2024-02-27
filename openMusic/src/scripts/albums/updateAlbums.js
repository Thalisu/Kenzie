import createAlbums from "./index.js";
const updateAlbums = () => {
  const AlbumContainer = document.querySelector(".albums");
  while (AlbumContainer.firstChild) {
    AlbumContainer.removeChild(AlbumContainer.lastChild);
  }

  createAlbums();
};
export default updateAlbums;
