import React, { useState, useEffect } from 'react';

import Searchbar from './Searchbar/Searchbar';
import FethImages from './Services/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default function App() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  // const [per_page, setPer_page] = useState(12);
  const [loading, setLoading] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);

  const per_page = 12;

  useEffect(() => {
    if (value === '') {
      return;
    }

    setLoading(true);

    FethImages(value, per_page, page)
      .then(images => {
        const hits = images.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          }
        );

        setImages(prev => {
          return prev ? [...prev, ...hits] : hits;
        });

        setIsShowBtn(page < Math.ceil(images.totalHits / 12));
      })
      .finally(() => setLoading(false));
  }, [page, value]);

  const onSubmit = value => {
    setValue(value);
    setImages(null);
    setPage(1);
  };

  const handleClick = () => setPage(prev => prev + 1);

  return (
    <div>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      {images && <ImageGallery images={images}></ImageGallery>}
      {loading && <Loader></Loader>}
      {images?.length > 0 && isShowBtn && (
        <Button handleClick={handleClick}></Button>
      )}
    </div>
  );
}
