import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({
  img: { id, webformatURL, largeImageURL, tags },
}) {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleShowModal = e => {
    setIsShowModal(prev => !prev);
  };

  return (
    <>
      {isShowModal && (
        <Modal
          closeModal={toggleShowModal}
          largeImageURL={largeImageURL}
          tags={tags}
        ></Modal>
      )}

      <li className={css.ImageGalleryItem} onClick={toggleShowModal}>
        <img
          className={css.ImageGalleryItem_image}
          src={webformatURL}
          alt={id}
        />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.object,
};
