import "./index.css";
import GalleryItem from "../galleryItem/galleryItem";

const Gallery = ({ items }) => {
  return (
    <div className="GalleryWrapper">
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
