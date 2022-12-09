export const ImageGalleryItem = images => {
  return (
    <>
      <p>{images}</p>
      {/* {images.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </li>
      ))} */}
    </>
  );
};
