import classes from './SuccessModal.module.css';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const SuccessModal = props => {
    return <div className={classes['book-added-container']}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        <Link to={props.link || '#'} className={classes['link-back-button']}>
            <PrimaryButton content={props.button} className={classes['back-button']} onClick={props.onClick} />
        </Link>
    </div>
};

export default SuccessModal;
