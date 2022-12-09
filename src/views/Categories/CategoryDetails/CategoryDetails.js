import Context from '../../../context/context';
import { Fragment, useContext } from 'react';
import BookDetails from '../../Library/BookDetails/BookDetails';
import Arrow from '../../Library/BookDetails/assets/arrow-figure.svg';
import bookClasses from '../../Library/Library.module.css';
import classes from './CategoryDetails.module.css';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';


function CategoryDetails() {
    const context = useContext(Context);

    const onExpandBookDetailsHandler = event => {
        context.setSelectedBook(event.currentTarget.id);
    };

    const onGetBackHandler = () => {
        context.clearStates();
    };

    return <div className={classes['categories-details-container']}>
        {context.selectedBook !== '' ? <BookDetails from='categories' /> :
            <Fragment>
                <h1 className={classes['category-title']}>{context.selectedCategory}</h1>
                <div className={classes['books-list-container']}>
                    <p>Estes são os livros que temos nesta categoria:</p>
                    {context.books.filter(book => book.category === context.selectedCategory).length > 0 ?
                        <div className={bookClasses['books-list-container']}>
                            {context.books.filter(book => book.category === context.selectedCategory).map(book =>
                                <div key={book.id} id={book.id} className={bookClasses['book-card']} onClick={onExpandBookDetailsHandler}>
                                    <img src={book.image} alt={book.title} />
                                    <p className={bookClasses['book-title']}>{book.title}</p>
                                    <p className={bookClasses['book-author']}>{book.author}</p>
                                    <p className={bookClasses['book-price']}>{book.price}€/semana</p>
                                </div>
                            )}
                        </div> :
                        <div className={classes['no-books-found-container']}>
                            <p>Parece que não temos livros da categoria que escolheu</p>
                            <PrimaryButton content='Voltar' onClick={onGetBackHandler} />
                        </div>
                    }
                </div>
            </Fragment>
        }
    </div>
};

export default CategoryDetails;
