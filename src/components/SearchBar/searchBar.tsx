import { ChangeEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { useLazyQuery } from '@apollo/client';
import Loader from '../loader/loader';
import CharacterNameResults from './characteNameResults';
import { getCharctersName } from '../../../graphql/querys';
import { GrView } from 'react-icons/gr';

function searchBar({
  name,
  setName,
  handleChange,
}: {
  name: string;
  setName: Function;
  handleChange: Function;
}) {
  const [getCharctersN, result] = useLazyQuery(getCharctersName);
  const [showResults, setShowResults] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleChageInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setName(value);
    handleChange(event);
  };
  useEffect(() => {
    setShowResults(!showResults);
  }, []);
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
        onChange={handleChageInput}
        placeholder='Name Character'
        className={styles.charId}
        value={name}
        name='name'
      />
      {name !== '' && (
        <div className={styles.icon} onClick={() => setShowResults(!showResults)}>
          <span>
            <GrView />
          </span>
        </div>
      )}

      <div className={styles.containerResults}>
        {loading && name !== '' ? (
          <Loader />
        ) : name !== '' && !showResults ? (
          <CharacterNameResults characters={result.data?.nameCharacters} reset={handleReset} />
        ) : null}
      </div>
    </div>
  );
}

export default searchBar;
