import { ICharacter } from '../../interface/Interface';
import style from './cardName.module.css';

function cardName({ character }: { character: ICharacter }) {
  return (
    <div className={style.container}>
      <img src={character.image} alt='character' />
      <span>{character.name}</span>
    </div>
  );
}

export default cardName;
