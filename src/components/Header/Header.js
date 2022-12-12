import Context from '../../context/context';
import { Fragment, useContext, useState } from 'react';
import classes from './Header.module.css';
import Logo from './assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import LogOutFigure from './assets/log-out-figure.svg';
import UserFigure from './assets/user-figure.svg';
import Arrow from './assets/arrow-down.svg';
import PT from './assets/pt-flag.svg';
import EN from './assets/uk-flag.svg';

function Header() {
    const context = useContext(Context);

    const [displayLanguageDropdown, setDisplayLanguageDropdown] = useState(false);

    const displayLanguageHandler = () => {
        setDisplayLanguageDropdown(prevState => !prevState);
    };

    const setLocationHandler = event => {
        context.setLocation(event.currentTarget.id);
    };

    const logOutHandler = () => {
        context.setLogin('false');
    };

    const setLanguageHandler = event => {
        context.setLanguage(event.currentTarget.id);
    };

    return <div className={classes['header-container']}>
        <img src={Logo} alt='logo' className={classes['logo']} />

        <div className={classes['navigation']}>
            <div className={classes['navigation-item']}>
                <NavLink to='/' id='/' onClick={setLocationHandler}><p>{context.content.menu.home}</p></NavLink>
                {context.location === '/' && <hr className={classes['under-line']} />}
            </div>
            <div className={classes['navigation-item']}>
                <NavLink to='/library' id='library' onClick={setLocationHandler}><p>{context.content.menu.books}</p></NavLink>
                {context.location === 'library' && <hr className={classes['under-line']} />}
            </div>
            <div className={classes['navigation-item']}>
                <NavLink to='/categories' id='categories' onClick={setLocationHandler}><p>{context.content.menu.categories}</p></NavLink>
                {context.location === 'categories' && <hr className={classes['under-line']} />}
            </div>
            <div className={classes['navigation-item']}>
                <NavLink to='/about' id='about' onClick={setLocationHandler}><p>{context.content.menu.about}</p></NavLink>
                {context.location === 'about' && <hr className={classes['under-line']} />}
            </div>
        </div>

        <div className={classes['login-language']}>
            {
                context.login === 'false' ?
                    <Link to='/login' style={{ all: 'unset' }} id={'/'} onClick={setLocationHandler}><button className={classes['login-button']}>Login</button></Link> :
                    <Fragment>
                        <img src={UserFigure} alt='user-figure' />
                        <img src={LogOutFigure} alt='log-out-figure' onClick={logOutHandler} style={{ cursor: 'pointer' }} />
                    </Fragment>
            }
            <div className={classes['language']} onClick={displayLanguageHandler}>
                <img src={Arrow} alt='arrow' style={{ transform: displayLanguageDropdown && 'rotate(180deg)' }} />
                <img src={context.lang === 'PT' ? PT : EN} alt='pt-flag' />
                {displayLanguageDropdown &&
                    <div className={classes['dropdown']}>
                        <div className={classes['dropdown-item']} id='PT' onClick={setLanguageHandler}>
                            <img src={PT} alt='pt-flag' />
                        </div>
                        <div className={classes['dropdown-item']} id='EN' onClick={setLanguageHandler}>
                            <img src={EN} alt='uk-flag' />
                        </div>
                    </div>
                }
            </div>
        </div>

    </div>
};

export default Header;
