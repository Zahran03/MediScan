import React from 'react';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <img src="/desain-tanpa-judul-2.png" alt="Logo" className={styles.logo} />
        <ul className={styles.menu}>
          <li className={styles.menuItem}>History Check</li>
          <li className={styles.menuItem}>Check Up</li>
          <li className={styles.menuItem}>Profile</li>
        </ul>
      </div>

      {/* Konten utama */}
      <div className={styles.content}>
        <div className={styles.admin}>Admin</div>
        <div className={styles.adminLine}></div>
        <div className={styles.grid}>
          <Card title="Prediksi Diabetes" image="/diabetes.png" description="Prediksi diabetes menggunakan model AI" />
          <Card title="Prediksi Hipertensi" image="/hipertensi.png" description="Analisis risiko hipertensi secara otomatis" />
          <Card title="Prediksi Penyakit Jantung" image="/jantung.png" description="Deteksi dini risiko penyakit jantung" />
        </div>
      </div>
    </div>
  );
}
