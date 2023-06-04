import styles from './Card.module.css'
export default function Card(props){
  let {movieData} = props
  return <div className={styles.Card}>
    <div className={styles.image}>
        <img src={movieData.Poster} alt={movieData.Title} />
    </div>
    <div className={styles.title}>
         {movieData.Title}
    </div>
  </div>
}