import classes from './Input.module.css';

const Input = props => {
    return <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required || false}
        className={`${classes['input-component']} ${props.className}`}
        style={props.style}
    />
}

export default Input;
