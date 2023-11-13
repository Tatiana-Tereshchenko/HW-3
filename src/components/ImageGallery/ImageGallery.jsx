import React, { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem";

class ImageGallery extends Component  {
    render() {
        const { images, onItemClick} = this.props;
        return (
            <ul>
                {images.map((image, index) => (
                    <ImageGalleryItem
                        key={`image-${image.id}-${index}`}
                        imageUrl={image.webformatURL}
                        onItemClick={()=> onItemClick(image.largeImageURL)}
                    />))}
           </ul>
        )
    }
}

export default ImageGallery;