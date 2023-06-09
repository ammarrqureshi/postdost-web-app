import classes from './../Influencer.module.css';
import PostGallery from './PostTab/PostGallery';
import InfluencerNavbar from './InfluencerNavbar';
import React ,{ useContext } from 'react';
import { TabContext } from '../../../../contexts/TabProvider';
import PricingTab from './PricingTab/PricingTab';
import UserProvider from '../../../../contexts/UserProvider';

function InfluencerNavData(){
const tabContext=useContext(TabContext);
const activeTab=tabContext.activeTab;
// ............
const tabContent=[
    <PostGallery />,
    <div>Content for Tab 2</div>,
    <div>Content for Tab 3</div>,
    <PricingTab />,
]

return(
      <UserProvider>
       <section className={classes.influencerNavData}>
          <InfluencerNavbar></InfluencerNavbar>
          {tabContent[activeTab]}
        </section>
      </UserProvider>

)}

export default InfluencerNavData;