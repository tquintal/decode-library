import classes from './Search.module.css';
import SearchIcon from './assets/search-icon.svg';

const Search = props => {
    return <div className={classes['search-container']}>
        <img src={SearchIcon} alt='search-icon' className={classes['search-icon']} />
        <input
            type='text'
            className={classes['search-input']}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            autoFocus={props.autoFocus || true}
        />
    </div>
};

export default Search;
