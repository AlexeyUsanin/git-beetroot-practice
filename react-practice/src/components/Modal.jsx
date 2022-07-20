import { Link } from "react-router-dom";

const Modal = ({ src, alt, show, onClose, photoId }) => {
  return (
    show && <div className="popup">
      <div className="popup__overlay">
        <div className="popup__content">
          <button onClick={onClose} className="popup__btn-close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h3>{alt}</h3>
          <img className="popup__content-img" src={src} alt={alt} />
          <Link to={`photos/${photoId}`}>Show page</Link>
        </div>

      </div>
    </div>
  )
}

export default Modal;