import classes from './OrangeButton.module.css';

const OrangeButton = props => {
    return <button
        className={classes['orange-button']}
        onClick={props.onClick}
    >
        {props.content}
    </button>
};

export default OrangeButton;
