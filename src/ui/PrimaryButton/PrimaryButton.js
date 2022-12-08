import classes from './PrimaryButton.module.css';

const PrimaryButton = props => {
    return <button
        type={props.type}
        onClick={props.onClick}
        className={`${classes['primary-button']} ${props.className}`}
        style={props.style}
    >
        {props.content}
    </button>
};

export default PrimaryButton;
