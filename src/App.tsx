// import { useState } from 'react';
import SearchBar from './components/SearchBar/searchBar';
// import Loader from '../src/components/loader/loader';

import styles from './app.module.css';

function App() {
  // const [count, setCount] = useState < number > 0;

  return (
    <header className={styles.headerApp}>
      <h1 className={styles.title}>
        Rick
        <span>and</span>
        Morthy
      </h1>
      <div className={styles.containerItems}>
        <SearchBar />
      </div>
      {/* <Loader /> */}
    </header>
  );
}

export default App;
