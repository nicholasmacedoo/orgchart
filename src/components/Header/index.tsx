import React from 'react';
import styles from './styles.module.scss';

export function Header(){
  return (
    <header className={styles.container}>
        <div className={styles.brand}>
            <p>a.</p>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Sair</li>
            </ul>
        </nav>
    </header>
  );
}