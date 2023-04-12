import InstaIcon from '../../../../../../assets/InfluencerPageAssets/InstaIcon.png';
import classes from './InstagramInfo.module.css';

function InstagramInfo(){
    return(
        <div className={classes.instaInfo}>
        <img src={InstaIcon} alt="Insta-icon" />
         <label>7.8 Million Followers</label>
        </div>
    )
}

export default InstagramInfo;