import classes from './DimmedBackground.module.css';

const DimmedBackground = props => {
    return <div className={classes['dimmed-container']}>
        {props.children}
    </div>
};

export default DimmedBackground;
