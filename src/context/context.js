import React, { useState, useEffect } from 'react';
import { Books } from '../storage/Books/Books';
import { PT } from '../content/PT.js';
import { EN } from '../content/EN.js';

const Context = React.createContext({
    selectedBook: {},
    lang: null,
    content: null,
    login: null,
    setLanguage: () => { },
    setLogin: () => { },
    setSelectedBook: () => { }
});

export const ContextProvider = props => {
    const [language, setLanguage] = useState(localStorage.getItem('Lang') || localStorage.setItem('Lang', 'PT'));
    const [login, setLogin] = useState(localStorage.getItem('Login') || localStorage.setItem('Login', 'false'));
    const [selectedBook, setSelectedBook] = useState('');

    const setLanguageHandler = lang => {
        setLanguage(lang);
        localStorage.setItem('Lang', `${lang}`);
    };

    const [content, setContent] = useState(PT);
    useEffect(() => {
        if (language === 'PT') {
            setContent(PT);
        } else if (language === 'EN') {
            setContent(EN);
        };
    }, [language]);

    const setLoginHandler = () => {
        const state = login === 'true' || false;
        setLogin(state);
        localStorage.setItem('Login', `${state}`);
    };

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
                lang: language,
                content: content,
                login: login,
                setLanguage: setLanguageHandler,
                setLogin: setLoginHandler,
                setSelectedBook: setSelectedBookHandler
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default Context;
