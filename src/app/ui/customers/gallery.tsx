'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './gallery.module.scss';

let imageId = 0;

const image = {
  id: imageId
};

const images = Array(4).fill(image).map(image => {
  const newImage = {
    ...image,
    id: imageId
  };
  imageId++;

  return newImage;
});

const baseImageWidth = 50;

const activeImageWidth = {
  width: baseImageWidth + '%'
};

const adjacentActiveImageWidth = {
  width: (baseImageWidth / 2) + '%'
};

const notActiveImageWidth = {
  width: (baseImageWidth / 4) + '%'
};


export default function Gallery() {
  const [activeImageId, setActiveImageId] = useState(0);

  return (
    <div className={clsx(styles.GalleryContainer)}>
      <ul className={clsx(styles.ImagesList)}>
        {images.map(image => {
          return (
            <motion.li
              key={image.id}
              className={clsx(styles.ImageBox)}
              initial={
                image.id === activeImageId ?
                activeImageWidth :
                image.id === activeImageId + 1 || image.id === activeImageId - 1 ?
                adjacentActiveImageWidth :
                notActiveImageWidth
              }
              animate={
                image.id === activeImageId ?
                activeImageWidth :
                image.id === activeImageId + 1 || image.id === activeImageId - 1 ?
                adjacentActiveImageWidth :
                notActiveImageWidth
              }
              transition={{ duration: 0.5 }}
              onMouseEnter={e => {
                setActiveImageId(image.id);
              }}
            >
              <div
                className={clsx(styles.Image)}
              >{image.id}</div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  );
};
