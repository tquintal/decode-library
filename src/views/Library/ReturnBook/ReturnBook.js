import { useState } from 'react';
import classes from './ReturnBook.module.css';
import Close from '../assets/close-figure.svg';
import Like from './assets/like-figure.svg';
import LikeHighlighted from './assets/like-figure-highlighted.svg';
import Dislike from './assets/dislike-figure.svg';
import DislikeHighlighted from './assets/dislike-figure-highlighted.svg';
import PrimaryButton from '../../../ui/PrimaryButton/PrimaryButton';

const ReturnBook = props => {
    const [interaction, setInteraction] = useState('');
    const setInteractionHandler = event => {
        if (event.currentTarget.id === 'like') {
            setInteraction('like');
        } else if (event.currentTarget.id === 'dislike') {
            setInteraction('dislike');
        } else {
            setInteraction('');
        };
    };

    return <div className={classes['return-book-screen']}>

        <div className={classes['return-book-container']}>
            <div className={classes['title-exit']}>
                <p>Devolver livro</p>
                <img src={Close} alt='close-figure' />
            </div>

            <p>Diga-nos a sua opinião sobre este livro.</p>

            <div className={classes['like-dislike-container']}>
                <div className={classes['like-dislike-figures-container']} id='like' onClick={setInteractionHandler}>
                    <img src={`${interaction === 'like' ? LikeHighlighted : Like}`} alt='like-figure' />
                    <p style={interaction === 'like' ? { color: 'var(--orange)' } : {}}>Gostei</p>
                </div>
                <div className={classes['like-dislike-figures-container']} id='dislike' onClick={setInteractionHandler}>
                    <img src={`${interaction === 'dislike' ? DislikeHighlighted : Dislike}`} alt='like-figure' />
                    <p style={interaction === 'dislike' ? { color: 'var(--orange)' } : {}}>Não gostei</p>
                </div>
            </div>

            <PrimaryButton content='Devolver' className={`${classes['return-button']} ${interaction !== '' && classes['active']}`} />
        </div>
    </div>
};

export default ReturnBook;
