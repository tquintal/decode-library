import { useState } from 'react';
import classes from './Search.module.css';
import SearchIcon from './assets/search-icon.svg';

const Search = props => {
    const [search, setSearch] = useState('');

    const setSearchHandler = event => {
        setSearch(event.target.value);
        console.log(event.target.value);
    };

    return <div className={classes['search-container']}>
        <img src={SearchIcon} alt='search-icon' className={classes['search-icon']} />
        <input
            type='text'
            className={classes['search-input']}
            placeholder={props.placeholder}
            value={search}
            onChange={setSearchHandler}
        />
    </div>
};

export default Search;
