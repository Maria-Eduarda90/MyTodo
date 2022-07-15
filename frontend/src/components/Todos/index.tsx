import imgMarkAsDone from '../../assets/Vector.svg';
import imgTrash from '../../assets/trash 1.svg';

import styles from './styles.module.scss';
import { useTodos } from '../../hook/useTodo';

type todoProps = {
    mark_as_done?: boolean;
}

export function Todo({ mark_as_done = false }: todoProps){
    const { todos, handleSubmitDelete } = useTodos();

    return(
        <>
            {todos.map(todo => {
                return (
                <div className={`${styles.container} ${mark_as_done ? `${styles.markAsDone}` : ''}`} key={todo.id}>
                    <div className={styles.wrapper}>
                        <p>{todo.assignment}</p>

                        <div>
                            <button>
                                <img src={imgMarkAsDone} alt="Marcar como feito" />
                                Marcar como feito
                            </button>
                                <button className={styles.trash} id={todo.id} onClick={() => handleSubmitDelete(todo.id)}>
                                <img src={imgTrash} alt="Excluir" />
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>);
            })}
        </>
    );
}