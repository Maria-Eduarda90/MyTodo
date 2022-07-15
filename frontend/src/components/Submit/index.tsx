import { useTodos } from '../../hook/useTodo';
import styles from './styles.module.scss';

export function Submit(){
    const { assignment, setAssignment, handleSubmit } = useTodos();
    
    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                 type="text" 
                 placeholder="Digite..."
                 onChange={e => setAssignment(e.target.value)}
                 value={assignment}
                />
            </form>
        </div>
    );
}