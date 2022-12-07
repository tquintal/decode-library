import { useContext } from 'react';
import Context from '../../../context/context';
import classes from './BookDetails.module.css';
import Arrow from './assets/arrow-figure.svg';

function BookDetails() {
    const context = useContext(Context);

    const backToLibraryHandler = () => {
        context.setSelectedBook('');
    };

    return <div className={classes['book-details-container']}>
        <div className={classes['book-details-navigation']}>
            <p className={classes['back-to-library']} onClick={backToLibraryHandler}>A nossa biblioteca</p>
            <img src={Arrow} alt='arrow-right' />
            <p>{context.selectedBook.title}</p>
        </div>
    </div>
};

export default BookDetails;
