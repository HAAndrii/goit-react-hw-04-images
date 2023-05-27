import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={css.image_gallery}>
        {images.map(img => {
          return <ImageGalleryItem img={img} key={img.id}></ImageGalleryItem>;
        })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
