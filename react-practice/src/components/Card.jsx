import React from "react";
import Modal from "./Modal";

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpenModal() {
    this.setState({ open: true })
  }

  handleCloseModal() {
    this.setState({ open: false })
  }

  componentDidUpdate() {
    if (this.state.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  render() {
    const { src, alt, photographer, id } = this.props;

    return (
      <>
        <div onClick={() => this.handleOpenModal()}>
          <div className="card">
            <div className="card__overlay">
              <div className="card__top">
                {alt}
              </div>
              <div className="card__bottom">
                {photographer}
              </div>
            </div>
            <img className="card__img" src={src.medium} alt={alt} />
          </div>
        </div>
        <Modal photoId={id} show={this.state.open} src={src.original} alt={alt} onClose={() => this.handleCloseModal()} />
      </>
    )
  }
}

export default Card