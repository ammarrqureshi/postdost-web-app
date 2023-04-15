import classes from './Influencer.module.css';
import InfluencerCard from './InfluencerCard/InfluencerCard';
import InfluencerNavData from './InfluencerNavbarContent/InfluencerNavData';
import TabProvider from './../../../contexts/TabProvider';
import CardProvider from '../../../contexts/CardProvider';

const Influencer = () => {
  return (
    <TabProvider>
      <CardProvider>
      <section className={classes.influencerPage}>
       <InfluencerCard> </InfluencerCard>
       <InfluencerNavData> </InfluencerNavData>
    </section>
    </CardProvider>
    </TabProvider>
  )
}

export default Influencer;