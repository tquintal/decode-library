import classes from './Home.module.css';
import OrangeButton from '../../ui/OrangeButton/OrangeButton';
import { Books } from '../../storage/Books/Books';
import BookFigure from './assets/book-figure.svg';

function Home() {

    const onClickHandler = () => {
        console.log('Hello world');
    };

    return <div className={classes['home-container']}>
        <div className={classes['home-first-section']}>
            <div className={classes['banner-left']}>
                <h1 className={classes['welcome-text-title']}>Bem-vindo à nossa biblioteca online</h1>
                <p className={classes['welcome-text']}>Descruba os romances, histórias míticas, biografias e muito mais na nossa biblioteca. Requisite o seu próximo livro de uma forma fácil e em poucos passos</p>
                <OrangeButton content='Requisite já um livro' onClick={onClickHandler} />
            </div>
            <img src={BookFigure} alt='book-figure' />
        </div>

        <div className={classes['home-second-section-container']}>
            <div className={classes['home-second-section']}>
                <div className={classes['home-second-section-title']}>
                    <h1>Sempre com novidades</h1>
                    <p>Veja os novos livros que apareceram! </p>
                </div>

                <div className={classes['books-container']}>
                    {Books.sort((a, b) => a.id - b.id).map(book => book.id <= 4 &&
                        <div key={book.id} className={classes['book-container']}>
                            <img src={book.image} alt='book' />
                            <div className={classes['book-description']}>
                                <p className={classes['book-title']}>{book.title}</p>
                                <p className={classes['book-author']}>{book.author}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
};

export default Home;
