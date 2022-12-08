import classes from './OrderPlaced.module.css';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';

const OrderPlaced = props => {
    const onExitHandler = () => { props.onExit(); };

    return <div className={classes['order-placed-container']}>
        <h1>Livro requisitado</h1>
        <p>Requisitou o livro com sucesso.</p>
        <PrimaryButton content='Voltar' onClick={onExitHandler} className={classes['order-placed-container-button']} />
    </div>
};

export default OrderPlaced;
