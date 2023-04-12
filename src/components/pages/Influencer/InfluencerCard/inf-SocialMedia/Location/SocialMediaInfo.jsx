import classes from './SocialMediaInfo.module.css';
import InstagramInfo from './InstagramInfo';
import LocationInfo from './LocationInfo';

function SocialMediaInfo(){
    return (
        <section className={classes.socialMediaInfo}>
        <InstagramInfo></InstagramInfo>
        <LocationInfo></LocationInfo>
        </section>
    )
}
export default SocialMediaInfo;