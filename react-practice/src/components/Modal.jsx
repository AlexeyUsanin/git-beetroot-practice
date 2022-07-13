const Modal = ({ src, alt, show, onClose }) => {
  return (
    show && <div className="popup">
      <div className="popup__overlay">
        <div className="popup__content">
          <button onClick={onClose} className="popup__btn-close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h3>{alt}</h3>
          <img className="popup__content-img" src={src} alt={alt} />
        </div>

      </div>
    </div>
  )
}

export default Modal;