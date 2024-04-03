import { Character } from '../../interface/Interface';
import styles from './modal.module.css';

function modalDetail({ character }: { character: Character }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={character.image} alt='character' />
      </div>
      <div className={styles.info}>
        <span>
          <p>Name:</p>
          {character.name === '' ? 'Unknown' : character.name}
        </span>
        <span>
          <p>Status:</p>
          {character.status === '' ? 'Unknown' : character.status}
        </span>
        <span>
          <p>Specie:</p>
          {character.species === '' ? 'Unknown' : character.species}
        </span>
        <span>
          <p>Gender:</p>
          {character.gender === '' ? 'Unknown' : character.gender}
        </span>
        <span>
          <p>Origin:</p>
          {character.origin?.name === '' ? 'Unknown' : character.origin?.name}
        </span>
        <span>
          <p>Type:</p>
          {character.type === '' ? 'Unknown' : character.type}
        </span>
      </div>
    </div>
  );
}

export default modalDetail;
