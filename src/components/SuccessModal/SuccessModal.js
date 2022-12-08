import classes from './SuccessModal.module.css';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';

const SuccessModal = props => {
    return <div className={classes['book-added-container']}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        <PrimaryButton content={props.button} className={classes['back-button']} onClick={props.onClick} />
    </div>
};

export default SuccessModal;
