import IconTextLink from "../../../../../../../UI/IconTextLink";
import classes from './PricingPageNav.module.css';
import DummyIcon from './../../../../../../../../assets/InfluencerPageAssets/PricingNavIcon.svg';

function PricingPageNav(){
    return(
         <div className={classes.pricingNav}>
            <IconTextLink text='Buy a post'
            image={DummyIcon}
            ></IconTextLink>
            <IconTextLink text='Get subscription'></IconTextLink>
            <IconTextLink text='New Campaign'></IconTextLink>
         </div>
    )
}

export default PricingPageNav;