import classes from './Influencer.module.css';
import InfluencerCard from './InfluencerCard/InfluencerCard';
import InfluencerNavData from './InfluencerNavbarContent/InfluencerNavData';
import TabProvider from './../../../contexts/TabProvider';
import InfluencerProvider from '../../../contexts/InfluencerProvider';

const Influencer = () => {
  return (
    <TabProvider>
      <InfluencerProvider>
        <section className={classes.influencerPage}>
          <InfluencerCard> </InfluencerCard>
          <InfluencerNavData> </InfluencerNavData>
        </section>
      </InfluencerProvider>
    </TabProvider>
  );
};

export default Influencer;
