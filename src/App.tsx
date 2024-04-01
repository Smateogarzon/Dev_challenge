// import { useState } from 'react';
import SearchBar from './components/SearchBar/searchBar';
import Loader from '../src/components/loader/loader';
import { ICharacter } from './interface/searchBarInterface';
import styles from './app.module.css';

function App() {
  // const [count, setCount] = useState < number > 0;
  let f = '';
  f = 1;
  return (
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
          <select className={styles.select} defaultValue='all'>
            <option value='all' disabled>
              status
            </option>
            <option value='alive'>alive</option>
            <option value='dead '>dead</option>
            <option value='unknown'>unknown</option>
          </select>
          <select className={styles.select} defaultValue='all'>
            <option value='all' disabled>
              Gender
            </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>unknown</option>
          </select>
          <select className={styles.select} defaultValue='all'>
            <option value='all' disabled>
              Species
            </option>
            <option value='human'>Human</option>
            <option value='alien'>Alien</option>
            <option value='cronenberg'>Cronenberg</option>
            <option value='unknown'>Unknown</option>
            <option value='robot'>Robot</option>
          </select>
          <button>Reset</button>
        </div>
      </div>
      <Loader />
    </header>
  );
}

export default App;
