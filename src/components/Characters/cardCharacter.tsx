import { useState } from 'react';
import { Character } from '../../interface/Interface';
import ModalDetail from '../Detail/modalDetail';
import styles from './card.module.css';

function cardCharacter({ character }: { character: Character }) {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={styles.container} onClick={handleModal}>
        <img src={character.image} alt='character' />
        <span>{character.name}</span>
      </div>
      {showModal && <ModalDetail character={character} />}
      {showModal && <div className={styles.overlay} onClick={handleModal}></div>}
    </>
  );
}

export default cardCharacter;
