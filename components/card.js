import styles from '../styles/Card.module.css';
import Button from '../components/Button';

export default function Card({ title, image, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.line}></div> {/* Garis putih */}
      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>{description}</p>
        <Button text="Mulai Prediksi" />
     </div>
    </div>
  );
}
