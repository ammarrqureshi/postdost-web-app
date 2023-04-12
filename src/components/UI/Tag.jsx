import classes from './Tag.module.css';

function Tag(props){
    return(
        <div className={classes.tag}>
           <h1>#{props.tagName}</h1>
        </div>
    ) 
  
}

export default Tag;