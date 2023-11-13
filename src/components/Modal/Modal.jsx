import React, { Component } from "react";
import {OverlayBox, ModalBox} from './Modal.styled';

class Modal extends Component {
    componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
    if (e.keyCode === 27) {
        this.props.onClose();
    }
    };

    handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
        this.props.onClose();
    }
    };

    render() {
    const { imageUrl } = this.props;
    return (
        <OverlayBox  onClick={this.handleOverlayClick}>
        <ModalBox >
            <img src={imageUrl} alt="" />
        </ModalBox>
        </OverlayBox>
    );
    }
}
export default Modal;


