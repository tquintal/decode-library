import { useState } from 'react';
import classes from './Login.module.css';
import DimmedBackground from '../../components/DimmedBackground/DimmedBackground';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import BooksFigure from './assets/sign-up-books-figure-min.png';
import Input from '../../components/Input/Input';
import CheckBoxFigure from './assets/checkbox-figure.svg'
import CheckBoxClickFigure from './assets/checkbox-click-figure.svg';
import Google from './assets/google-figure.svg';
import Apple from './assets/apple-figure.svg';
import Facebook from './assets/facebook-figure.svg';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const setEmailHandler = event => {
        setEmail(event.target.value);
    };

    const setPasswordHandler = event => {
        setPassword(event.target.value);
    };

    const setRePasswordHandler = event => {
        setRePassword(event.target.value);
    };

    const [newsletter, setNewsletter] = useState(false);
    const setNewsletterHandler = () => {
        setNewsletter(prev => !prev);
    };

    const [showSuccess, setShowSuccess] = useState(false);
    const onFormSubmitHandler = event => {
        event.preventDefault();
        if (email.trim() !== '' &&
            password.trim() !== '' &&
            rePassword.trim() !== '' &&
            password === rePassword) {
            setShowSuccess(prev => !prev);
        } else if (password !== rePassword) {
            alert('As password não coincidem');
            setPassword('');
            setRePassword('');
        } else {
            alert('Por favor, preencha todos os campos');
        };
    };

    return <div className={classes['login-container']}>
        <div className={classes['login']}>
            {
                showSuccess &&
                <DimmedBackground>
                    <SuccessModal title='Registo concluído' message='Por favor, confirme o seu e-mail para validar o seu acesso.' button='Continuar' link='/' />
                </DimmedBackground>
            }
            <div className={classes['left-container']}>
                <h1>Comece a viajar<br /> pelos livros</h1>
                <img src={BooksFigure} alt='books-figure' />
                <div>
                    <p className={classes['quote']}>“Respirei fundo e escutei o velho e orgulhoso som do meu coração. Eu sou, eu sou, eu sou.”</p>
                    <p className={classes['quote-author']}>Sylvia Plath</p>
                </div>
            </div>
            <form onSubmit={onFormSubmitHandler} className={classes['right-container']}>
                <h1>Registar</h1>
                <Input type='email' value={email} onChange={setEmailHandler} placeholder='Email' className={classes['input-button']} />
                <Input type='password' value={password} onChange={setPasswordHandler} placeholder='Password' className={classes['input-button']} />
                <Input type='password' value={rePassword} onChange={setRePasswordHandler} placeholder='Confirmar password' className={classes['input-button']} />
                <div className={classes['remember-me']} onClick={setNewsletterHandler}>
                    {
                        newsletter ?
                            <img src={CheckBoxClickFigure} alt='checkbox-click-figure' /> :
                            <img src={CheckBoxFigure} alt='checkbox-figure' />
                    }
                    <p>Inscrever-me na newsletter</p>
                </div>
                <PrimaryButton content='Registar' type='submit' className={classes['input-button']} />
                <p>Registar com a sua conta</p>
                <div className={classes['register-sign-up-figures']}>
                    <img src={Google} alt='social-figure' />
                    <img src={Apple} alt='social-figure' />
                    <img src={Facebook} alt='social-figure' />
                </div>
                <hr />
                <Link to='/login' className={classes['go-to-login']}><SecondaryButton content='Já tem conta? Faça login' className={classes['input-button']} /></Link>
            </form>
        </div>
    </div>
};

export default SignUp;
