import Hashtag from '../../../UI/HashTag';
import classes from './../Influencer.module.css';
function TagElements(){
    return(
     <div className={classes.tagGrid}>
      <Hashtag># programming</Hashtag>
      <Hashtag># programming</Hashtag>
      <Hashtag># programming</Hashtag>
      <Hashtag># programming</Hashtag>
     </div>
    )
}

export default TagElements;
