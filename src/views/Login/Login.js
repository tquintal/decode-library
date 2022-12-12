import Context from '../../context/context';
import { useContext, useState } from 'react';
import classes from './Login.module.css';
import BooksFigure from './assets/books-figure.svg';
import Input from '../../components/Input/Input';
import CheckBoxFigure from './assets/checkbox-figure.svg'
import CheckBoxClickFigure from './assets/checkbox-click-figure.svg';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import DimmedBackground from '../../components/DimmedBackground/DimmedBackground';
import { Link } from 'react-router-dom';

function Login() {
    const context = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberLogin, setRememberLogin] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const onFormSubmitHandler = event => {
        event.preventDefault();
        if (email !== '' && password !== '') {
            context.setLogin('true');
            setShowSuccess(prev => !prev);
        };
    };

    const setEmailHandler = event => {
        setEmail(event.target.value);
    };

    const setPasswordHandler = event => {
        setPassword(event.target.value);
    };

    const setRememberLoginHandler = () => {
        setRememberLogin(prev => !prev);
    };

    return <div className={classes['login-container']}>
        {
            showSuccess &&
            <DimmedBackground>
                <SuccessModal title='Sucesso' message='Login efetuado com sucesso' button='Voltar' link='/' />
            </DimmedBackground>
        }
        <div className={classes['login']}>
            <div className={classes['left-container']}>
                <h1>Comece a viajar<br /> pelos livros</h1>
                <img src={BooksFigure} alt='books-figure' />
                <div>
                    <p className={classes['quote']}>“Há livros escritos para evitar espaços vazios na estante.”</p>
                    <p className={classes['quote-author']}>Carlos Drummond de Andrade</p>
                </div>
            </div>
            <form onSubmit={onFormSubmitHandler} className={classes['right-container']}>
                <h1>Login</h1>
                <Input type='email' value={email} onChange={setEmailHandler} placeholder='Email' className={classes['input-button']} />
                <Input type='password' value={password} onChange={setPasswordHandler} placeholder='Password' className={classes['input-button']} />
                <div className={classes['remember-me']} onClick={setRememberLoginHandler}>
                    {
                        rememberLogin ?
                            <img src={CheckBoxClickFigure} alt='checkbox-click-figure' /> :
                            <img src={CheckBoxFigure} alt='checkbox-figure' />
                    }
                    <p>Lembrar-me nas próximas sessões</p>
                </div>
                <PrimaryButton content='Login' type='submit' className={classes['input-button']} />
                <hr />
                <Link to='/sign-up' className={classes['go-to-login']}><SecondaryButton content='Não tem conta? Registe-se aqui' className={classes['input-button']} /></Link>
            </form>
        </div>
    </div>
}

export default Login;
