import classes from './BuySubscription.module.css';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
import { useContext } from 'react';
import { PricingContext } from '../../../../../../../../ContextStore/PricingProvider';

function BuySubscription(){
const pricingData=useContext(PricingContext);

const Silver=pricingData.find(arr => arr.packageName==='Silver');
const Gold=pricingData.find(arr => arr.packageName==='Gold');
const Diamond=pricingData.find(arr => arr.packageName==='Diamond');

    return(
        <section className={classes.subscriptionCards}>
         <SubscriptionCard packageData={Silver}></SubscriptionCard>
         <SubscriptionCard packageData={Gold}></SubscriptionCard>
         <SubscriptionCard packageData={Diamond}></SubscriptionCard>
        </section>
    
    )
}

export default BuySubscription;