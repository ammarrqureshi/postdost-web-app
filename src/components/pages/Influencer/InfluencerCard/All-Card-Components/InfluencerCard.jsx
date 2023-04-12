import InfluencerImage from "../inf-Image-Component/InfluencerImage";
import favourite from '../../../../../assets/InfluencerPageAssets/addtofavourite.png';
import classes from './InfluencerCard.module.css';
import CardText from "../Bio-Text-Component/CardText";
import IconTextLink from "../../../../UI/IconTextLink";
import TagElements from "../Tag-Component/TagElements";
import SocialMediaInfo from "../inf-SocialMedia/Location/SocialMediaInfo";
import ActionButtons from "../InfluencerCardBtns/ActionButtons";


function InfluencerCard(){
    return(
        <section className={classes.influencerCard}>
          <InfluencerImage></InfluencerImage>
          <CardText></CardText>
          <IconTextLink opacity='1' color='#5E17EB' image={favourite} text='Add to favourite'></IconTextLink>
          <TagElements></TagElements>
          <SocialMediaInfo></SocialMediaInfo>
          <ActionButtons></ActionButtons>
        </section>
    )}

export default InfluencerCard;