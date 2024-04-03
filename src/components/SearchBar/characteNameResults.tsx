import CardName from './cardName';
import { ICharacter, ICharacterNameResults } from '../../interface/Interface';
import styles from './characterName.module.css';

function CharacterNameResults({ characters, reset }: ICharacterNameResults) {
  return characters?.map((character: ICharacter) => (
    <div key={character.id} className={styles.container}>
      <CardName character={character} reset={reset} />
    </div>
  ));
}

export default CharacterNameResults;
