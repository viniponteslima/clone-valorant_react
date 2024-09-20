import { Link } from 'react-router-dom';
import styles from './ItemMenu.module.css';

export default function ItemMenu({ text, path, highlight }) {
  return (
    <Link to={path} className={styles.itemMenu}>
      <div className={styles.a} />
      <h2 className={highlight ? styles.highlight : ''}>
        {text}
      </h2>
    </Link>
  );
}