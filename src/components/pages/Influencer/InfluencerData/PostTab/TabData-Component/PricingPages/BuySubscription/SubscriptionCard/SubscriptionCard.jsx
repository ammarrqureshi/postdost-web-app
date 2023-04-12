import classes from './SubscriptionCard.module.css';
import SubscriptionCardHeading from "./Subscription-Heading/SubscriptionCardHeading";
import PackageDetail from './PackageDetail/PackageDetail';
import Button from '../../../../../../../../UI/Button';

function SubscriptionCard({packageData}){
 return(
        <section className={classes.subscriptionCard}>
        <SubscriptionCardHeading
        packageName={packageData.packageName}
        description={packageData.description}
        price={packageData.price}
        ></SubscriptionCardHeading>
        <PackageDetail 
        detail1={packageData.details[0]}
        detail2={packageData.details[1]}
        detail3={packageData.details[2]}
        detail4={packageData.details[3]}
        detail5={packageData.details[4]}
        detail6={packageData.details[5]}
        ></PackageDetail>
        <Button>Buy now 20$</Button>
        </section>
        )
}

export default SubscriptionCard;