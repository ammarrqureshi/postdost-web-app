import React from 'react';
import classes from './Influencer.module.css';
// import Card from '../../UI/Card';
import InfluencerCard from './InfluencerCard/All-Card-Components/InfluencerCard';
import TabData from './InfluencerData/PostTab/TabData-Component/TabData';
import TabProvider from '../../../ContextStore/TabProvider';

const Influencer = () => {
  return (
    <TabProvider>
      <section className={classes.influencerPage}>
       <InfluencerCard> </InfluencerCard>
       <TabData> </TabData>
    </section>
    </TabProvider>
   
  )
}

export default Influencer;