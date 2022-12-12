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
    location: null,
    search: null,
    books: null,
    categories: null,
    setLanguage: () => { },
    setLogin: () => { },
    setLocation: () => { },
    setSearch: () => { },
    setSelectedBook: () => { },
    setSelectedCategory: () => { },
    clearStates: () => { }
});

export const ContextProvider = props => {
    const [language, setLanguage] = useState(localStorage.getItem('Lang') || localStorage.setItem('Lang', 'PT') || 'PT');
    const [content, setContent] = useState(PT);
    const [login, setLogin] = useState(localStorage.getItem('Login') || localStorage.setItem('Login', 'false') || 'false');
    const [location, setLocation] = useState(
        window.location.pathname !== '/' ? window.location.pathname.slice(1) : '/'
    );
    const [search, setSearch] = useState('');
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const clearStatesHandler = () => {
        setSearch('');
        setSelectedBook('');
        setSelectedCategory('');
    };

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

    const setLoginHandler = value => {
        setLogin(value);
        localStorage.setItem('Login', value);
    };

    const setLocationHandler = location => {
        setLocation(location);
        clearStatesHandler();
    };

    const setSearchHandler = word => {
        setSearch(word);
    };

    const setSelectedBookHandler = bookId => {
        if (bookId !== '') {
            setSelectedBook(Books.find(book => parseInt(book.id) === parseInt(bookId)));
        } else {
            setSelectedBook(bookId);
        };
    };

    const setSelectedCategoryHandler = category => {
        setSelectedCategory(category);
    };

    return (
        <Context.Provider
            value={{
                selectedBook: selectedBook,
                selectedCategory: selectedCategory,
                lang: language,
                content: content,
                login: login,
                location: location,
                search: search,
                books: Books,
                categories: Categories,
                setLanguage: setLanguageHandler,
                setLogin: setLoginHandler,
                setLocation: setLocationHandler,
                setSearch: setSearchHandler,
                setSelectedBook: setSelectedBookHandler,
                setSelectedCategory: setSelectedCategoryHandler,
                clearStates: clearStatesHandler
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default Context;
