'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './cards.module.scss';

let cardId = 0;

const card = {
  id: cardId,
  isHovered: 0
};

const cards = Array(4).fill(card).map(card => {
  const newCard = {
    ...card,
    id: cardId
  };
  cardId++;

  return newCard;
});

const transition = {
  delay: 0.1,
  duration: 0.2
};

const bottomLayerCardBase = {
  rotate: 0,
  opacity: 0,
  zIndex: 1
};

const bottomLayerCardRotate = {
  rotate: -15,
  opacity: 0.7,
  zIndex: 3
};


export default function Cards() {
  const [stateCards, setStateCards] = useState(cards);

  return (
    <div className={clsx(styles.CardsContainer)}>
      <ul className={clsx(styles.CardsList)}>
        {cards.map(card => {
          return (
            <li
              key={card.id}
              className={clsx(styles.CardBox)}
            >
              <motion.div
                className={clsx(styles.BottomLayerCard)}
                animate={
                  stateCards.find(stateCard => stateCard.id === card.id).isHovered ?
                  bottomLayerCardRotate :
                  bottomLayerCardBase
                }
                transition={transition}
              />
              <motion.div
                className={clsx(styles.Card)}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: '#505050',
                  color: '#ffffff',
                  zIndex: 4,
                  transition: transition
                }}
                onHoverStart={e => {
                  const newStateCards = stateCards.map(stateCard => {
                    if (stateCard.id === card.id) {
                      return {
                        ...stateCard,
                        isHovered: 1
                      };
                    }
                    else {
                      return {
                        ...stateCard,
                        isHovered: 0
                      };
                    };
                  });

                  setStateCards(newStateCards);
                }}
                onHoverEnd={e => {
                  const newStateCards = stateCards.map(stateCard => {
                    return {
                      ...stateCard,
                      isHovered: 0
                    };
                  });

                  setStateCards(newStateCards);
                }}
              >{card.id}</motion.div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
