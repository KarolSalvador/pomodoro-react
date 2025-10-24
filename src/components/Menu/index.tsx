import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <a
          className={styles.menuLink}
          aria-label='Ir para a Home'
          title='Ir para a Home'
        >
          <HouseIcon />
        </a>
        <a
          className={styles.menuLink}
          aria-label='Ver Histórico'
          title='Ver Histórico'
        >
          <HistoryIcon />
        </a>
        <a
          className={styles.menuLink}
          aria-label='Ir para Configurações'
          title='Ir para Configurações'
        >
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          aria-label='Mudar Tema'
          title='Mudar Tema'
        >
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
