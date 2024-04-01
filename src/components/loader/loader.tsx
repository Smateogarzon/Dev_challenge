import styles from './loader.module.css';

function loader() {
  return (
    <div className={styles.container}>
      <img src='https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif' alt='portal' />
    </div>
  );
}

export default loader;
