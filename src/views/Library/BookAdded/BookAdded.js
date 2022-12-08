import classes from './BookAdded.module.css';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';

const BookAdded = props => {
    return <div className={classes['book-added-container']}>
        <h1>Adicionou um livro</h1>
        <p>Obrigado por adicionar mais um livro à nossa biblioteca.</p>
        <PrimaryButton content='Voltar' className={classes['back-button']} onClick={props.onGetBackClick} />
    </div>
};

export default BookAdded;
