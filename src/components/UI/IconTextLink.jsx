import classes from './IconTextLink.module.css';
import Link from './Link';

function IconTextLink(props){
    return(
        <div className={classes.addtofavourite}>
            <img src={props.image} alt="Add to favourite icon" />
            <Link 
            fontSize='15px'
            opacity={props.opacity}
            color={props.color}>
                {props.text}
            </Link>
        </div>
    )
}

export default IconTextLink;