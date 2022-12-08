import { useState } from 'react';
import DimmedBackground from '../../../components/DimmedBackground/DimmedBackground';
import classes from './AddBook.module.css';
import Close from '../assets/close-figure.svg';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';
import Input from '../../../components/Input/Input';
import SuccessModal from '../../../components/SuccessModal/SuccessModal';

const AddBook = props => {
    const [fileName, setFileName] = useState('');
    const [bookAdded, setBookAdded] = useState(false);

    function onCloseHandler() {
        props.onExit();
        setBookAdded(false);
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        if (fileName !== '') {
            setBookAdded(true);
        } else {
            alert('Por favor adicione a imagem do livro.');
        };
    };

    const setFileNameHandler = event => {
        setFileName(event.target.files[0].name);
    };

    return <DimmedBackground>
        {bookAdded ? <SuccessModal
            onClick={onCloseHandler}
            title='Adicionou um livro'
            message='Obrigado por adicionar mais um livro à nossa biblioteca.'
            button='Voltar'
        /> :
            <div className={classes['add-book-container']}>
                <div className={classes['title-close-container']}>
                    <h1>Adicionar um livro</h1>
                    <img src={Close} alt='close-figure' onClick={onCloseHandler} />
                </div>
                <form onSubmit={onSubmitHandler} className={classes['form-container']}>
                    <Input type='text' required placeholder='Título do livro' />
                    <Input type='text' required placeholder='Autor' />
                    <Input type='text' required placeholder='Categoria' />
                    <Input type='text' required placeholder='Editora' />
                    <div className={classes['load-image-container']}>
                        <label htmlFor='upload' className={classes['upload-button']}>Carregar imagem do seu computador</label>
                        <input type='file' id='upload' className={classes['upload']} accept='png jpg svg' onChange={setFileNameHandler} />
                        {fileName !== '' && <p>{fileName}</p>}
                        <PrimaryButton content='Adicionar' />
                    </div>
                </form>
            </div>
        }
    </DimmedBackground>
};

export default AddBook;
