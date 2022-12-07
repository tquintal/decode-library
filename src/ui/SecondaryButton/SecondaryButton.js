import classes from './SecondaryButton.module.css';

const SecondaryButton = props => {
    return <button
        type={props.type}
        onClick={props.onClick}
        className={classes['secondary-button']}
        style={props.style}
    >
        {props.content}
    </button>
};

export default SecondaryButton;
