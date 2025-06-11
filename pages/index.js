import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <img src="/desain-tanpa-judul-2.png" alt="Logo" className={styles.logo} />
        <ul className={styles.menu}>
          <li className={styles.menuItem}>History Check</li>
          <li className={styles.menuItem}>Check Up</li>
          <li className={styles.menuItem}>Profile</li>
        </ul>
      </div>

      {/* Konten utama: Selamat Datang */}
      <div className={styles.mainContent}>
      <div className={styles.admin}>Admin</div>
      <div className={styles.adminLine}></div>
        <h1 className={styles.welcomeText}>Selamat Datang di Aplikasi Mediscan!</h1>
        <button className={styles.startButton}>Mulai Check Up</button>
      </div>
    </div>
  );
}
