import classes from './OrangeButton.module.css';

const OrangeButton = props => {
    return <button
        type={props.type}
        onClick={props.onClick}
        className={classes['orange-button']}
        style={props.style}
    >
        {props.content}
    </button>
};

export default OrangeButton;
