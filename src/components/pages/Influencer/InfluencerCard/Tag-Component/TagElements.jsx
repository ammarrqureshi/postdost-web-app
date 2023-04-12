import classes from './TagElements.module.css';
import Tag from '../../../../UI/Tag';
function TagElements(){
    return(
     <div className={classes.tagGrid}>
      <Tag tagName='programming'></Tag>
      <Tag tagName='programming'></Tag>
      <Tag tagName='programming'></Tag>
      <Tag tagName='programming'></Tag>
     </div>
    )
}

export default TagElements;
