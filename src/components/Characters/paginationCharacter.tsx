import { ChangeEvent, useEffect, useState } from 'react';
import { Character, ICharacterFilter } from '../../interface/Interface';
import { CharacterArray } from '../../interface/Interface';
import CardCharacter from './cardCharacter';
import styles from './paginationCharacter.module.css';

function paginationCharacter({ filter }: ICharacterFilter) {
  const [page, setPage] = useState<number>(0);
  const [numPage, setNumPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<CharacterArray>([]);

  useEffect(() => {
    const numPage: number = Math.ceil(filter?.length / 20);
    setPage(numPage);
    const paginatedData: CharacterArray = [];
    for (let i = 1; i <= numPage; i++) {
      const startIdx: number = (i - 1) * 20;
      const endIdx: number = i * 20;
      const pageData: Character[] = filter.slice(startIdx, endIdx);
      paginatedData.push(pageData);
    }

    setCurrentPage(paginatedData);
  }, [filter]);

  const changePage = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    if (parseInt(value) < 1 || parseInt(value) > page) return;
    setNumPage(parseInt(value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        {currentPage[numPage - 1]?.map((character: Character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </div>
      <div>
        <button onClick={() => numPage > 1 && setNumPage(numPage - 1)}>Previus</button>
        <div>
          <input type='number' value={numPage} onChange={changePage} />
          <p>/</p>
          <span>{page}</span>
        </div>
        <button onClick={() => numPage < page && setNumPage(numPage + 1)}>Next</button>
      </div>
    </div>
  );
}
export default paginationCharacter;
