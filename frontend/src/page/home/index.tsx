import { Submit } from '../../components/Submit';
import { Todo } from '../../components/Todos';
import { Header } from '../../components/Header';
import styles from './styles.module.scss';

export function Home(){
    return(
        <div className={styles.container}>
            <Header />
            <Submit />
            <Todo />
        </div>
    );
}