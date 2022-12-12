import Context from '../../context/context';
import { useContext, useState, Fragment } from 'react';
import classes from './Home.module.css';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import { Books } from '../../storage/Books/Books';
import BookFigure from './assets/book-figure.svg';
import DimmedBackground from '../../components/DimmedBackground/DimmedBackground';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import NewsletterFigure from './assets/newsletter-figure.svg';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';

function Home() {
    const context = useContext(Context);

    const [email, setEmail] = useState('');

    const onOrderBookHandler = () => {
        context.setLocation('library');
    };

    const [showSubscribed, setShowSubscribed] = useState(false);
    const setShowSubscribedHandler = () => {
        setShowSubscribed(prev => !prev);
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        if (email !== '') {
            setShowSubscribedHandler();
            setEmail('');
        };
    };

    const onEmailChangeHandler = event => {
        setEmail(event.target.value);
    };

    return <Fragment>
        {/* NEWSLETTER SUCCESS */}
        {showSubscribed &&
            <DimmedBackground>
                <SuccessModal
                    onClick={setShowSubscribedHandler}
                    title='Inscrição feita'
                    message='Irá receber as nossas novidades no seu email.'
                    button='Voltar'
                />
            </DimmedBackground>
        }

        {/* BANNER */}
        <div className={classes['home-first-section-container']}>
            <div className={classes['home-first-section']}>
                <div className={classes['banner-left']}>
                    <h1 className={classes['welcome-text-title']}>
                        {context.content.welcome}
                    </h1>
                    <p className={classes['welcome-text']}>
                        {context.content.description}
                    </p>
                    <Link to='/library' style={{ all: 'unset' }}><PrimaryButton content={context.content.orderBook} onClick={onOrderBookHandler} /></Link>
                </div>
                <img src={BookFigure} alt='book-figure' />
            </div>
        </div>

        {/* NEW BOOKS */}
        <div className={classes['home-second-section-container']}>
            <div className={classes['home-second-section']}>
                <div className={classes['home-second-section-title']}>
                    <h1>{context.content.secondSectionTitle}</h1>
                    <p>{context.content.secondSectionDescription}</p>
                </div>

                <div className={classes['books-container']}>
                    {Books.sort((a, b) => a.id - b.id).map(book => book.id <= 4 &&
                        <div key={book.id} className={classes['book-container']}>
                            <img src={book.image} alt={book.title} className={classes['book-cover']} />
                            <div className={classes['book-description']}>
                                <p className={classes['book-title']}>{book.title}</p>
                                <p className={classes['book-author']}>{book.author}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* NEWSLETTER */}
        <div className={classes['home-third-section-container']}>
            <div className={classes['home-third-section']}>
                <div className={classes['home-third-section-left']}>
                    <h1>{context.content.secondSectionTitle}</h1>
                    <p>{context.content.secondSectionDescription}</p>
                    <form onSubmit={onSubmitHandler}>
                        <Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={onEmailChangeHandler}
                            style={{ width: '240px' }}
                        />
                        <PrimaryButton type='submit' content={context.content.thirdSectionButton} style={{ padding: '10px', width: '100px' }} />
                    </form>
                </div>
                <img src={NewsletterFigure} alt='newsletter-figure' />
            </div>
        </div>
    </Fragment>
};

export default Home;
