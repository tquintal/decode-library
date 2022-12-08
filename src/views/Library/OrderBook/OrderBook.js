import { useContext, useState } from 'react';
import Context from '../../../context/context';
import classes from './OrderBook.module.css';
import Close from '../assets/close-figure.svg';
import Arrow from './assets/arrow-figure.svg';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';
import OrderPlaced from '../OrderPlaced/OrderPlaced';

const OrderBook = props => {
    const context = useContext(Context);
    const [total, setTotal] = useState(0);

    const [error, setError] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const setShowOptionsHandler = () => {
        setError(false);
        setShowOptions(prev => !prev)
    };

    const [option, setOption] = useState('Quantas semanas');
    const setOptionHandler = event => {
        setOption(event.currentTarget.innerHTML);
        setShowOptionsHandler();
        // CALCULATE TOTAL
        setTotal((context.selectedBook.price * parseInt(event.currentTarget.id)).toFixed(2));
    };

    const [showOrderPlaced, setShowOrderPlaced] = useState(false);
    const placeOrderHandler = () => {
        if (option !== 'Quantas semanas') {
            setShowOrderPlaced(prev => !prev);
        } else setError(true);
    };

    const onCloseHandler = () => {
        props.onExit();
        placeOrderHandler();
    };

    return <div className={classes['order-book-screen']}>
        {showOrderPlaced ? <OrderPlaced onExit={onCloseHandler} /> :
            <div className={classes['order-book-container']}>
                <div className={classes['title-close-container']}>
                    <h1>Requisitar livro</h1>
                    <img src={Close} alt='close-figure' onClick={onCloseHandler} />
                </div>
                <div className={classes['week-options-container']}>
                    <div className={classes['dropdown']}>
                        <button
                            className={`${classes['dropbtn']} ${error && classes['error']}`}
                            onClick={setShowOptionsHandler}
                            style={showOptions ? { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' } : option === 'Quantas semanas' ? { color: '#AAAAAA' } : {}}>
                            {option}
                            <img
                                src={Arrow}
                                alt='arrow-figure'
                                style={showOptions ? { rotate: '180deg' } : {}} />
                        </button>
                        <div className={classes['dropdown-content']} style={showOptions ? { display: 'block' } : {}}>
                            <p id='1' onClick={setOptionHandler}>1 semana</p>
                            <p id='2' onClick={setOptionHandler}>2 semanas</p>
                            <p id='3' onClick={setOptionHandler}>3 semanas</p>
                        </div>
                    </div>
                    <p className={classes['info-text']}>Este livro tem o custo de {context.selectedBook.price}€/semana</p>
                    <p className={classes['total']}>Total: <span>{total}€</span></p>
                </div>
                <PrimaryButton content='Requisitar' className={classes['order-button']} onClick={placeOrderHandler} />
            </div>
        }
    </div>
};

export default OrderBook;
