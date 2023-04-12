import displayImage from '../../../../../assets/InfluencerPageAssets/ProfileImage.png';
import classes from './InfluencerImage.module.css';

function InfluencerImage(){
    return(
        <div className={classes.profileimg}>
        <img src={displayImage} alt="Influencer_Image" />
        </div>
    )
}

export default InfluencerImage;