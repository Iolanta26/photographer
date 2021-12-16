import "./gallery.css";

export default function GalleryList({ id, title, setSelected }) {
  return (
    <button className="galleryButton" onClick={() => setSelected(id)}>
      {title}
    </button>
  );
}
