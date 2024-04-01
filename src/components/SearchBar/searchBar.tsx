import { ChangeEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { gql, useLazyQuery } from '@apollo/client';
import Loader from '../loader/loader';
import CharacterNameResults from './characteNameResults';

const getCharctersName = gql`
  query findName($name: String) {
    nameCharacters(filter: $name) {
      id
      name
      image
    }
  }
`;

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

  return (
    <div className={styles.inputContainer}>
      <input
        type='search'
        id='busqueda'
        onChange={handleChage}
        placeholder='Add Character'
        className={styles.charId}
        value={name}
      />
      <div className={styles.loaderContainer}>
        {loading ? (
          <Loader />
        ) : name !== '' ? (
          <CharacterNameResults characters={result.data?.nameCharacters} />
        ) : null}
      </div>
    </div>
  );
}

export default searchBar;
