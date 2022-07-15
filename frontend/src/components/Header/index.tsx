import styles from './styles.module.scss';
import imgPikachu from '../../assets/pikachu.png';

export function Header() {
    return (
       <header className={styles.header}>
                <h1>MyTODO</h1>

            <img src={imgPikachu} alt="pikachu" />
       </header>
    );
}