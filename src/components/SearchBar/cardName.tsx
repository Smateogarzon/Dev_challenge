import { ICharacter } from '../../interface/searchBarInterface';
import style from './cardName.module.css';

function cardName({ character }: { character: ICharacter }) {
  console.log(character);
  return (
    <div className={style.container}>
      <img src={character.image} alt='character' />
      <span>{character.name}</span>
    </div>
  );
}

export default cardName;
