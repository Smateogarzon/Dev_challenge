import { useEffect } from 'react';
import { getCharctersId } from '../../../graphql/querys';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { TbHomeMove } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import styles from './detail.module.css';

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [getDetail, result] = useLazyQuery(getCharctersId);

  useEffect(() => {
    getDetail({
      variables: { id },
    });
  }, [id]);
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => navigate('/')}>
        <TbHomeMove />
        <span>Home</span>
      </button>
      <div className={styles.infoContainer}>
        <div className={styles.image}>
          <img src={result.data?.characterId.image} alt='character' />
        </div>
        <div className={styles.info}>
          <span>
            <p>Name:</p>
            {result.data?.characterId.name === '' ? 'Unknown' : result.data?.characterId.name}
          </span>
          <span>
            <p>Status:</p>
            {result.data?.characterId.status === '' ? 'Unknown' : result.data?.characterId.status}
          </span>
          <span>
            <p>Specie:</p>
            {result.data?.characterId.species === '' ? 'Unknown' : result.data?.characterId.species}
          </span>
          <span>
            <p>Gender:</p>
            {result.data?.characterId.gender === '' ? 'Unknown' : result.data?.characterId.gender}
          </span>
          <span>
            <p>Origin:</p>
            {result.data?.characterId.origin?.name === ''
              ? 'Unknown'
              : result.data?.characterId.origin?.name}
          </span>
          <span>
            <p>Type:</p>
            {result.data?.characterId.type === '' ? 'Unknown' : result.data?.characterId.type}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Detail;
