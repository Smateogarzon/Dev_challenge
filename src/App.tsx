// import { useState } from 'react';
import styles from './app.module.css';

function App() {
  // const [count, setCount] = useState < number > 0;
  return (
    <header>
      <h1 className={styles.title}>
        Rick
        <span>and</span>
        Morthy
      </h1>
    </header>
  );
}

export default App;
