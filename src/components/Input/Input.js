import classes from './Input.module.css';

const Input = props => {
    return <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={classes['input-component']}
        style={props.style}
    />
}

export default Input;
