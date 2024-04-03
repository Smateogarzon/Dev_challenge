// import { useState } from 'react';
import SearchBar from './components/SearchBar/searchBar';
import Loader from '../src/components/loader/loader';
import PaginationCharacter from './components/Characters/paginationCharacter';
import styles from './app.module.css';
import { useLazyQuery } from '@apollo/client';
import { getFilterCharcters } from '../graphql/querys';
import { ChangeEvent, useEffect, useState } from 'react';
import { Ifilter } from './interface/Interface';

function App() {
  const [getFilters, result] = useLazyQuery(getFilterCharcters);
  const [Reset, setReset] = useState<Ifilter>({ species: 'all', gender: 'all', status: 'all' });
  const [filters, setFilters] = useState<Ifilter>({ all: true });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (result.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [result]);

  useEffect(() => {
    getFilters({ variables: { filter: filters } });
  }, [filters]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    setFilters({ ...filters, [name]: value, all: false });
    setReset({ ...Reset, [name]: value });
  };

  const handleReset = () => {
    setFilters({ all: true });
    setReset({
      species: 'all',
      gender: 'all',
      status: 'all',
    });
  };
  return (
    <>
      <header className={styles.headerApp}>
        <h1 className={styles.title}>
          Rick
          <span>and</span>
          Morty
        </h1>
        <div className={styles.containerItems}>
          <SearchBar />
        </div>
        <div className={styles.containerFilters}>
          <div className={styles.containerSelects}>
            <select
              className={styles.select}
              value={Reset.status}
              onChange={handleChange}
              name='status'>
              <option value='all' disabled>
                status
              </option>
              <option value='alive'>alive</option>
              <option value='dead '>dead</option>
              <option value='unknown'>unknown</option>
            </select>
            <select
              className={styles.select}
              value={Reset.gender}
              onChange={handleChange}
              name='gender'>
              <option value='all' disabled>
                Gender
              </option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Genderless'>Genderless</option>
              <option value='unknown'>unknown</option>
            </select>
            <select
              className={styles.select}
              value={Reset.species}
              onChange={handleChange}
              name='species'>
              <option value='all' disabled>
                Species
              </option>
              <option value='human'>Human</option>
              <option value='humanoid'>Humanoid</option>
              <option value='alien'>Alien</option>
              <option value='cronenberg'>Cronenberg</option>
              <option value='unknown'>Unknown</option>
              <option value='robot'>Robot</option>
            </select>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </header>
      <main className={styles.containerMain}>
        {loading ? <Loader /> : <PaginationCharacter filter={result.data?.filterCharacters} />}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
