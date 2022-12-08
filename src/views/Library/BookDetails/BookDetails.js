import { Fragment, useContext, useState } from 'react';
import Context from '../../../context/context';
import classes from './BookDetails.module.css';
import Arrow from './assets/arrow-figure.svg';
import Favorite from './assets/favourite-figure.svg';
import Like from './assets/like-figure.svg';
import DisLike from './assets/dislike-figure.svg';
import Dot from './assets/dot-figure.svg';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../../ui/SecondaryButton/SecondaryButton';
import OrderBook from '../OrderBook/OrderBook';
import ReturnBook from '../ReturnBook/ReturnBook';

function BookDetails() {
    const context = useContext(Context);

    const backToLibraryHandler = () => {
        context.setSelectedBook('');
    };

    const ordered = context.selectedBook.ordered;
    const [showOrderScreen, setShowOrderScreen] = useState(false);
    const [showReturnScreen, setShowReturnScreen] = useState(false);

    const setShowOrderHandler = () => {
        setShowOrderScreen(prev => !prev);
    };

    const setShowReturnScreenHandler = () => {
        setShowReturnScreen(prev => !prev);
    };

    return <Fragment>
        {showOrderScreen && <OrderBook onExit={setShowOrderHandler} />}
        {showReturnScreen && <ReturnBook onExit={setShowReturnScreenHandler} />}
        <div className={classes['book-details-container']}>
            <div className={classes['book-details']}>
                <div className={classes['book-details-navigation']}>
                    <p className={classes['back-to-library']} onClick={backToLibraryHandler}>A nossa biblioteca</p>
                    <img src={Arrow} alt='arrow-right' />
                    <p>{context.selectedBook.title}</p>
                </div>

                <div className={classes['book-section-container']}>
                    <div className={classes['book-interaction-container']}>
                        <img src={context.selectedBook.image} alt='book-cover' />
                        <div className={classes['book-interaction']}>
                            <img src={Favorite} alt='favorite-figure' className={classes['favorite']} />
                            <div className={classes['like-dislike-container']}>
                                <img src={Like} alt='like-figure' />
                                <p>{context.selectedBook.likes}</p>
                            </div>
                            <div className={classes['like-dislike-container']}>
                                <img src={DisLike} alt='dislike-figure' />
                                <p>{context.selectedBook.dislikes}</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes['book-description-container']}>
                        <h1 className={classes['book-main-title']}>{context.selectedBook.title}</h1>
                        <div className={classes['author-title-container']}>
                            <p>{context.selectedBook.author}</p>
                            <img src={Dot} alt='dot-figure' />
                            <p style={{ color: '#AAAAAA' }}>{context.selectedBook.category}</p>
                        </div>
                        <p>Editora: <span style={{ fontWeight: '500' }}>{context.selectedBook.publish}</span></p>
                        <h1 className={classes['price']}>{context.selectedBook.price}€/semana</h1>
                        {context.selectedBook.available ? ordered ? <SecondaryButton content='Devolver' onClick={setShowReturnScreenHandler} /> : <PrimaryButton content='Requisitar' onClick={setShowOrderHandler} /> :
                            <div>
                                <p style={{ fontWeight: '500', padding: '15px' }}>Indisponível</p>
                                <p style={{ fontSize: '12px' }}>Este livro já foi requisitado ou já não está na nossa biblioteca.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
};

export default BookDetails;
