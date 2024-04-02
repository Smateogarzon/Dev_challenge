import { Character } from '../../interface/Interface';
import styles from './card.module.css';

function cardCharacter({ character }: { character: Character }) {
  return (
    <div className={styles.container}>
      <img src={character.image} alt='character' />
      <span>{character.name}</span>
    </div>
  );
}

export default cardCharacter;
