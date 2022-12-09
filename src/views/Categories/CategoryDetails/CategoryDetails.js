import Context from '../../../context/context';
import { Fragment, useContext } from 'react';
import BookDetails from '../../Library/BookDetails/BookDetails';
import Arrow from '../../Library/BookDetails/assets/arrow-figure.svg';
import bookClasses from '../../Library/Library.module.css';
import classes from './CategoryDetails.module.css';


function CategoryDetails() {
    const context = useContext(Context);

    const onExpandBookDetailsHandler = event => {
        context.setSelectedBook(event.currentTarget.id);
    };

    const onGoToCategoriesHandler = () => {
        context.setSelectedCategory('');
        context.setSearch('');
    };

    return <div className={classes['categories-details-container']}>
        {context.selectedBook !== '' ? <BookDetails from='categories' /> :
            <Fragment>
                <div className={classes['category-details-navigation']}>
                    <p className={classes['back-to-categories']} onClick={onGoToCategoriesHandler}>Categorias</p>
                    <img src={Arrow} alt='arrow-right' />
                    <p style={{ cursor: 'pointer' }}>{context.selectedCategory}</p>
                </div>
                <div className={classes['books-list-container']}>
                    <p>Estes são os livros que temos nesta categoria:</p>
                    <div className={bookClasses['books-list-container']}>
                        {context.books.filter(book => book.category === context.selectedCategory).map(book =>
                            <div key={book.id} id={book.id} className={bookClasses['book-card']} onClick={onExpandBookDetailsHandler}>
                                <img src={book.image} alt={book.title} />
                                <p className={bookClasses['book-title']}>{book.title}</p>
                                <p className={bookClasses['book-author']}>{book.author}</p>
                                <p className={bookClasses['book-price']}>{book.price}€/semana</p>
                            </div>
                        )}
                    </div>
                </div>
            </Fragment>
        }
    </div>
};

export default CategoryDetails;
