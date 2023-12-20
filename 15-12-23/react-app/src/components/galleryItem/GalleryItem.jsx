import "./index.css";

const GalleryItem = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt={item.title} />
    </div>
  );
};

export default GalleryItem;
