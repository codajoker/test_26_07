import styles from './FilmPage.module.css';
import filmsJson from '../../films.json';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { nanoid } from 'nanoid';

export function FilmPage({ movie }) {
  const [seriesNumber, setSeriesNumber] = useState(0);

  return (
    <div className={styles.infoWrap}>
      {movie && (
        <>
          <div className={styles.imgWrap}>
            <img
              className={styles.backDropImg}
              src={
                movie.img_url
                  ? movie.img_url
                  : 'https://via.placeholder.com/400x600'
              }
              alt={movie.title}
            />
          </div>
          <h2 className={styles.movieTitle}>{movie.title} </h2>
          <h3 className={styles.movieTitle}>Series</h3>
                  <ul className={styles.serialList}>{movie.series.map(serial => {
                      
              return ( <li className={styles.serialListItem} key={nanoid()}><Button variant="outlined" onClick={()=> {
                console.log('====================================');
                      console.log(serial);
                      console.log('====================================')
                    setSeriesNumber(serial.number -1)} }> {serial.number}</Button> </li>
              );
            })}                </ul>

                  <iframe
                    className={styles.video}
            width="300"
            height="200"
            src={movie.series[seriesNumber].url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
}

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { filmId } = useParams();
  useEffect(() => {
    filmsJson.serials.map(movie => {
      if (movie.id === filmId) {
        setMovie(movie);
      }
    });
  }, [filmId]);

  return (
    <div className={styles.ditailsWrap}>
      <div>
        <Link to={'/novelties'} className={styles.goBackBtn}>
          Go Back
        </Link>
      </div>

      <FilmPage movie={movie} />
    </div>
  );
}
