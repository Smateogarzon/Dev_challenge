import CardName from './cardName';
import { ICharacter, ICharacterNameResults } from '../../interface/Interface';
import styles from './characterName.module.css';

function CharacterNameResults({ characters }: ICharacterNameResults) {
  return characters?.map((character: ICharacter) => (
    <div key={character.id} className={styles.container}>
      <CardName character={character} />
    </div>
  ));
}

export default CharacterNameResults;
