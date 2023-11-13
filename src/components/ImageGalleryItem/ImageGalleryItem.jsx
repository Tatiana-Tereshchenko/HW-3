import React, { Component } from "react";

class ImageGalleryItem extends Component  {
    render() {
        const { imageUrl, onItemClick } = this.props;
        return (
                <li onClick={onItemClick}>
                <img  src={imageUrl} alt="" />
        </li>
        )
    }
}

export default ImageGalleryItem;