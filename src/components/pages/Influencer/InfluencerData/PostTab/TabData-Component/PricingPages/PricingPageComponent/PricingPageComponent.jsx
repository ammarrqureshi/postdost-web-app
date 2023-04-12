import PricingPageNav from "../PricingPageNav/PricingPageNav";
import classes from './PricingPageComponent.module.css';
import BuySubscription from "../BuySubscription/BuySubscription";
import PricingProvider from "../../../../../../../../ContextStore/PricingProvider";
function PricingPageComponent(){
    return(
      <PricingProvider> 
           <div className={classes.pricingPageContent}>
            <PricingPageNav></PricingPageNav>
            <BuySubscription></BuySubscription>
          </div>
        
      </PricingProvider>
         
    )
}

export default PricingPageComponent;