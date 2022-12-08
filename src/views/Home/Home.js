import { Fragment, useState } from 'react';
import classes from './Home.module.css';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import { Books } from '../../storage/Books/Books';
import BookFigure from './assets/book-figure.svg';
import DimmedBackground from '../../components/DimmedBackground/DimmedBackground';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import NewsletterFigure from './assets/newsletter-figure.svg';
import Input from '../../components/Input/Input';

function Home() {
    const [email, setEmail] = useState('');

    const onClickHandler = () => {
        console.log('Hello world');
    };

    const [showSubscribed, setShowSubscribed] = useState(false);
    const setShowSubscribedHandler = () => {
        setShowSubscribed(prev => !prev);
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        if (email !== '') {
            setShowSubscribedHandler();
            console.log('HERE');
        };
    };

    const onEmailChangeHandler = event => {
        setEmail(event.target.value);
    };

    return <div>
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
                    <h1 className={classes['welcome-text-title']}>Bem-vindo à nossa biblioteca online</h1>
                    <p className={classes['welcome-text']}>Descruba os romances, histórias míticas, biografias e muito mais na nossa biblioteca. Requisite o seu próximo livro de uma forma fácil e em poucos passos</p>
                    <PrimaryButton content='Requisite já um livro' onClick={onClickHandler} />
                </div>
                <img src={BookFigure} alt='book-figure' />
            </div>
        </div>

        {/* NEW BOOKS */}
        <div className={classes['home-second-section-container']}>
            <div className={classes['home-second-section']}>
                <div className={classes['home-second-section-title']}>
                    <h1>Sempre com novidades</h1>
                    <p>Veja os novos livros que apareceram! </p>
                </div>

                <div className={classes['books-container']}>
                    {Books.sort((a, b) => a.id - b.id).map(book => book.id <= 4 &&
                        <div key={book.id} className={classes['book-container']}>
                            <img src={book.image} alt={book.title} />
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
                    <h1>Inscreva-se na nossa newsletter</h1>
                    <p>Receba todas as novidades que o espera.</p>
                    <form onSubmit={onSubmitHandler}>
                        <Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={onEmailChangeHandler}
                            style={{ width: '240px' }}
                        />
                        <PrimaryButton type='submit' content='Inscrever' style={{ padding: '10px', width: '100px' }} />
                    </form>
                </div>
                <img src={NewsletterFigure} alt='newsletter-figure' />
            </div>
        </div>
    </div>
};

export default Home;
