import { ICharacter } from '../../interface/Interface';
import { Link } from 'react-router-dom';
import style from './cardName.module.css';

function cardName({ character, reset }: { character: ICharacter; reset: () => void }) {
  return (
    <Link to={`/detail/${character.id}`} style={{ textDecoration: 'none' }} onClick={reset}>
      <div className={style.container}>
        <img src={character.image} alt='character' />
        <span>{character.name}</span>
      </div>
    </Link>
  );
}

export default cardName;
