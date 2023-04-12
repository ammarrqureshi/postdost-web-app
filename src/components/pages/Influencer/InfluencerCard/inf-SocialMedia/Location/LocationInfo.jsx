import LocationIcon from '../../../../../../assets/InfluencerPageAssets/LocationInfo.png';
import classes from './LocationInfo.module.css'

function LocationInfo(){
    return(
        <div className={classes.locationInfo}>
        <img src={LocationIcon} alt="Insta-icon" />
         <label>chiniot city , Pakistan</label>
        </div>
    )
}

export default LocationInfo;