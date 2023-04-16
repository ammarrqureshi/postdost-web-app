import { useContext } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { InfluencerContext } from "../../../../contexts/InfluencerProvider";
import InfluencerImage from "./InfluencerImage";
import classes from './../Influencer.module.css'; 
import InstaIcon from './../../../../assets/InfluencerPageAssets/InstaIcon.png';
import LocationIcon from './../../../../assets/InfluencerPageAssets/LocationInfo.png';
=======
import { CardContext } from "../../../../contexts/CardProvider";
=======
import { InfluencerContext } from "../../../../contexts/InfluencerProvider";
>>>>>>> d93acb9 (Updated changes)
import InfluencerImage from "./InfluencerImage";
import classes from './../Influencer.module.css'; 
import InstaIcon from './../../../../assets/InfluencerPageAssets/InstaIcon.png';
import LocationIcon from './../../../../assets/InfluencerPageAssets/locationInfo.png';
>>>>>>> aa05bb4 (Small section left and some little styling)
import Addtofavourite from "./Addtofavourite";
import TagElements from "./TagElements";
import Card from '../../../UI/Card';
import Button from '../../../UI/Button';


function InfluencerCard(){
<<<<<<< HEAD
<<<<<<< HEAD
    const ctx=useContext(InfluencerContext);

    return(
        <Card className={classes.influencerCard}>
=======
    const ctx=useContext(CardContext);
=======
    const ctx=useContext(InfluencerContext);
>>>>>>> d93acb9 (Updated changes)

    return(
        <Card>
>>>>>>> aa05bb4 (Small section left and some little styling)
          <InfluencerImage displayImage={ctx.profileImg}></InfluencerImage>
          <section className={classes.cardText}>
          <h1>{ctx.influencerName}</h1>
          <h2>@{ctx.username}</h2>
          <h3>{ctx.profession}</h3>
          </section>
          <Addtofavourite></Addtofavourite>
          <TagElements></TagElements>
          <div className={classes.socialMediaLinks}>
          <div className={classes.instaInfo}>
          <img src={InstaIcon} alt="Insta-icon" />
          <label>{ctx.followers} Followers</label>
          </div>
          <div className={classes.locationInfo}>
          <img src={LocationIcon} alt="location-icon" />
          <label>{ctx.city}, {ctx.country}</label>
          </div>
          </div>
          <Button>Buy now <span>{ctx.initialPrice}$</span></Button>
          <Button $secondary>Message now</Button>
         </Card>
    )}

<<<<<<< HEAD
export default InfluencerCard;
=======
export default InfluencerCard;
>>>>>>> aa05bb4 (Small section left and some little styling)
