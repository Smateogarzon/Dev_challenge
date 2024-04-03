import { ChangeEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { useLazyQuery } from '@apollo/client';
import Loader from '../loader/loader';
import CharacterNameResults from './characteNameResults';
import { getCharctersName } from '../../../graphql/querys';

function searchBar() {
  const [getCharctersN, result] = useLazyQuery(getCharctersName);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChage = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setName(value);
  };

  useEffect(() => {
    getCharctersN({ variables: { name } });
  }, [name]);

  useEffect(() => {
    if (result.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [result]);

  const handleReset = () => {
    setName('');
    getCharctersN({ variables: { name: '' } });
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type='search'
        id='busqueda'
        onChange={handleChage}
        placeholder='Name Character'
        className={styles.charId}
        value={name}
      />

      <div className={styles.containerResults}>
        {loading && name !== '' ? (
          <Loader />
        ) : name !== '' ? (
          <CharacterNameResults characters={result.data?.nameCharacters} reset={handleReset} />
        ) : null}
      </div>
    </div>
  );
}

export default searchBar;
