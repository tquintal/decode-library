import React, { useState } from 'react';
import { Books } from '../storage/Books/Books';

const Context = React.createContext({
    selectedBook: {},
    setSelectedBook: () => { }
});

export const ContextProvider = props => {
    const [selectedBook, setSelectedBook] = useState('');

    const setSelectedBookHandler = bookId => {
        if (bookId !== '') {
            setSelectedBook(Books.find(book => parseInt(book.id) === parseInt(bookId)));
        } else {
            setSelectedBook(bookId);
        }
    };

    return (
        <Context.Provider
            value={{
                selectedBook: selectedBook,
                setSelectedBook: setSelectedBookHandler
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default Context;
