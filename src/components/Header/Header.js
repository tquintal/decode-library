import { useState } from 'react';
import classes from './Header.module.css';
import Logo from './assets/logo.svg';
import { NavLink } from 'react-router-dom';
import Arrow from './assets/arrow-down.svg';
import PT from './assets/pt-flag.svg';
import EN from './assets/uk-flag.svg';

function Header() {
    const [displayLanguageDropdown, setDisplayLanguageDropdown] = useState(false);

    const [location, setLocation] = useState(
        window.location.pathname !== '/' ? window.location.pathname.slice(1) : '/'
    );

    const displayLanguageHandler = () => {
        setDisplayLanguageDropdown(prevState => !prevState);
    };

    const setLocationHandler = event => {
        setLocation(event.currentTarget.id);
    };

    return <div className={classes['header-container']}>
        <img src={Logo} alt='logo' className={classes['logo']} />

        <div className={classes['navigation']}>
            <div className={classes['navigation-item']}>
                <NavLink to='/' id='/' onClick={setLocationHandler}><p>Home</p></NavLink>
                {location === '/' && <hr className={classes['under-line']} />}
            </div>
            <div className={classes['navigation-item']}>
                <NavLink to='/library' id='library' onClick={setLocationHandler}><p>Livros</p></NavLink>
                {location === 'library' && <hr className={classes['under-line']} />}
            </div>
            <div className={classes['navigation-item']}>
                <NavLink to='/categories' id='categories' onClick={setLocationHandler}><p>Categorias</p></NavLink>
                {location === 'categories' && <hr className={classes['under-line']} />}
            </div>
            <div className={classes['navigation-item']}>
                <NavLink to='/about' id='about' onClick={setLocationHandler}><p>Sobre nós</p></NavLink>
                {location === 'about' && <hr className={classes['under-line']} />}
            </div>
        </div>

        <div className={classes['login-language']}>
            <button className={classes['login-button']}>Login</button>
            <div className={classes['language']} onClick={displayLanguageHandler}>
                <img src={Arrow} alt='arrow' style={{ transform: displayLanguageDropdown && 'rotate(180deg)' }} />
                <img src={PT} alt='pt-flag' />
                {displayLanguageDropdown &&
                    <div className={classes['dropdown']}>
                        <div className={classes['dropdown-item']}>
                            <img src={PT} alt='pt-flag' />
                        </div>
                        <div className={classes['dropdown-item']}>
                            <img src={EN} alt='uk-flag' />
                        </div>
                    </div>
                }
            </div>
        </div>

    </div>
};

export default Header;
