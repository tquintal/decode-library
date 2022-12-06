import { useState } from 'react';
import classes from './Header.module.css';
import Logo from './assets/logo.svg';
import Arrow from './assets/arrow-down.svg';
import PT from './assets/pt-flag.svg';
import EN from './assets/uk-flag.svg';

function Header() {
    const [displayLanguageDropdown, setDisplayLanguageDropdown] = useState(false);

    const displayLanguageHandler = () => {
        setDisplayLanguageDropdown(prevState => !prevState);
    };

    return <div className={classes['header-container']}>
        <img src={Logo} alt='logo' className={classes['logo']} />

        <div className={classes['navigation']}>
            <div className={classes['navigation-item']}>
                <p>Home</p>
                <hr className={classes['under-line']} />
            </div>
            <div className={classes['navigation-item']}>
                <p>Livros</p>
            </div>
            <div className={classes['navigation-item']}>
                <p>Categorias</p>
            </div>
            <div className={classes['navigation-item']}>
                <p>Sobre nós</p>
            </div>
        </div>

        <div className={classes['login-language']}>
            <button className={classes['login-button']}>Login</button>
            <div className={classes['language']} onMouseEnter={displayLanguageHandler} onMouseLeave={displayLanguageHandler}>
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
