<<<<<<< HEAD
<<<<<<< HEAD
import classes from './Influencer.module.css';
import InfluencerCard from './InfluencerCard/InfluencerCard';
import InfluencerNavData from './InfluencerNavbarContent/InfluencerNavData';
import TabProvider from './../../../contexts/TabProvider';
import InfluencerProvider from '../../../contexts/InfluencerProvider';
=======
import React from 'react';
import classes from './Influencer.module.css';
// import Card from '../../UI/Card';
import InfluencerCard from './InfluencerCard/All-Card-Components/InfluencerCard';
import TabData from './InfluencerData/PostTab/TabData-Component/TabData';
import TabProvider from '../../../ContextStore/TabProvider';
>>>>>>> af25f29 (Pages created but it is not complete)
=======
import classes from './Influencer.module.css';
import InfluencerCard from './InfluencerCard/InfluencerCard';
import InfluencerNavData from './InfluencerNavbarContent/InfluencerNavData';
import TabProvider from './../../../contexts/TabProvider';
import CardProvider from '../../../contexts/CardProvider';
>>>>>>> aa05bb4 (Small section left and some little styling)

const Influencer = () => {
  return (
    <TabProvider>
<<<<<<< HEAD
<<<<<<< HEAD
      <InfluencerProvider>
      <section className={classes.influencerPage}>
       <InfluencerCard> </InfluencerCard>
       <InfluencerNavData> </InfluencerNavData>
    </section>
    </InfluencerProvider>
    </TabProvider>
=======
=======
      <CardProvider>
>>>>>>> aa05bb4 (Small section left and some little styling)
      <section className={classes.influencerPage}>
       <InfluencerCard> </InfluencerCard>
       <InfluencerNavData> </InfluencerNavData>
    </section>
    </CardProvider>
    </TabProvider>
<<<<<<< HEAD
   
>>>>>>> af25f29 (Pages created but it is not complete)
=======
>>>>>>> aa05bb4 (Small section left and some little styling)
  )
}

export default Influencer;