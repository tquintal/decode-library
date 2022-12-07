import { useState } from 'react';
import classes from './Library.module.css';
import Search from '../../components/Search/Search';
import { Books } from '../../storage/Books/Books';
import NewBook from './assets/new-book.svg';
import Pagination from './assets/pagination.svg';

function Library() {
    const [search, setSearch] = useState('');
    const [highlighted, setHighlighted] = useState('1');

    const setSearchHandler = event => {
        setSearch(event.target.value);
        console.log(event.target.value);
    };

    const setHighlightedHandler = event => {
        setHighlighted(event.target.id);
    };

    const subtractHighlightedHandler = () => {
        const subtract = `${parseInt(highlighted) - 1}`;
        if (subtract > 0)
            setHighlighted(subtract);
    };

    const addHighlightedHandler = () => {
        const add = `${parseInt(highlighted) + 1}`;
        if (add < 5)
            setHighlighted(add);
    };

    return <div className={classes['library-container']}>
        <h1>A nossa biblioteca</h1>
        <Search value={search} onChange={setSearchHandler} placeholder='Pesquise um livro' />
        <div className={classes['books-list-container']}>
            <div className={classes['new-book']}>
                <img src={NewBook} alt='new-book' />
                <p>Adicionar um livro</p>
            </div>

            {Books.map(book => book.title.toLowerCase().includes(search.trim().toLowerCase()) &&
                <div key={book.id} className={classes['book-card']}>
                    <img src={book.image} alt={book.title} />
                    <p className={classes['book-title']}>{book.title}</p>
                    <p className={classes['book-author']}>{book.author}</p>
                    <p className={classes['book-price']}>{book.price}/semana</p>
                </div>
            )}

        </div>
        <div className={classes['pagination-container']}>
            <img src={Pagination} alt='pagination' style={{ rotate: '180deg' }} className={`${highlighted === '1' && classes['dim']}`} onClick={subtractHighlightedHandler} />
            <p id='1' onClick={setHighlightedHandler} className={`${highlighted === '1' && classes['highlighted']}`}>1</p>
            <p id='2' onClick={setHighlightedHandler} className={`${highlighted === '2' && classes['highlighted']}`}>2</p>
            <p id='3' onClick={setHighlightedHandler} className={`${highlighted === '3' && classes['highlighted']}`}>3</p>
            <p id='4' onClick={setHighlightedHandler} className={`${highlighted === '4' && classes['highlighted']}`}>4</p>
            <img src={Pagination} alt='pagination' className={`${highlighted === '4' && classes['dim']}`} onClick={addHighlightedHandler} />
        </div>
    </div>
};

export default Library;
