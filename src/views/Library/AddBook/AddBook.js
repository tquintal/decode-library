import Context from '../../../context/context';
import { useContext, useState } from 'react';
import classes from './AddBook.module.css';
import Close from './assets/close-figure.svg';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';
import Input from '../../../components/Input/Input';

function AddBook() {
    const context = useContext(Context);
    const [fileName, setFileName] = useState('');

    function onCloseHandler() {
        context.setShowAddBook();
    };

    const onSubmitHandler = event => {
        event.preventDefault();
    };

    const setFileNameHandler = event => {
        setFileName(event.target.files[0].name);
    };

    return <div className={classes['add-book-screen']}>
        <div className={classes['add-book-container']}>
            <div className={classes['title-close-container']}>
                <h1>Adicionar um livro</h1>
                <img src={Close} alt='close-figure' onClick={onCloseHandler} />
            </div>
            <form onSubmit={onSubmitHandler} className={classes['form-container']}>
                <Input type='text' placeholder='Título do livro' />
                <Input type='text' placeholder='Autor' />
                <Input type='text' placeholder='Categoria' />
                <Input type='text' placeholder='Editora' />
                <div className={classes['load-image-container']}>
                    <label htmlFor='upload' className={classes['upload-button']}>Carregar imagem do seu computador</label>
                    <input type='file' id='upload' className={classes['upload']} accept='png jpg svg' onChange={setFileNameHandler} />
                    {fileName !== '' && <p>{fileName}</p>}
                    <PrimaryButton content='Adicionar' />
                </div>
            </form>
        </div>
    </div>
};

export default AddBook;
