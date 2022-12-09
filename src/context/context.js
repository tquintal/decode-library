import React, { useState, useEffect } from 'react';
import { Books } from '../storage/Books/Books';
import { Categories } from '../storage/Books/Books';
import { PT } from '../content/PT.js';
import { EN } from '../content/EN.js';

const Context = React.createContext({
    selectedBook: {},
    selectedCategory: {},
    lang: null,
    content: null,
    login: null,
    search: null,
    books: null,
    categories: null,
    setLanguage: () => { },
    setLogin: () => { },
    setSearch: () => { },
    setSelectedBook: () => { },
    setSelectedCategory: () => { }
});

export const ContextProvider = props => {
    const [language, setLanguage] = useState(localStorage.getItem('Lang') || localStorage.setItem('Lang', 'PT') || 'PT');
    const [content, setContent] = useState(PT);
    const [login, setLogin] = useState(localStorage.getItem('Login') || localStorage.setItem('Login', 'false'));
    const [search, setSearch] = useState('');
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const setLanguageHandler = lang => {
        setLanguage(lang);
        localStorage.setItem('Lang', `${lang}`);
    };

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

    const setSearchHandler = word => {
        setSearch(word);
    };

    const setSelectedBookHandler = bookId => {
        if (bookId !== '') {
            setSelectedBook(Books.find(book => parseInt(book.id) === parseInt(bookId)));
        } else {
            setSelectedBook(bookId);
        }
    };

    const setSelectedCategoryHandler = category => {
        setSelectedCategory(category);
    };

    const clearStates = () => {
        setSearch('');
        setSelectedBook('');
        setSelectedCategory('');
    };

    return (
        <Context.Provider
            value={{
                selectedBook: selectedBook,
                selectedCategory: selectedCategory,
                lang: language,
                content: content,
                login: login,
                search: search,
                books: Books,
                categories: Categories,
                setLanguage: setLanguageHandler,
                setLogin: setLoginHandler,
                setSearch: setSearchHandler,
                setSelectedBook: setSelectedBookHandler,
                setSelectedCategory: setSelectedCategoryHandler
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default Context;
