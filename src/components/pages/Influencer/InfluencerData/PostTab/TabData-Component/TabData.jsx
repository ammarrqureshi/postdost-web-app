import classes from './TabData.module.css';
import ImageGallery from '../PostGallery/ImageGallery';
import TabNavbar from '../InfluencerNavbar/TabNavbar';
import React ,{ useContext } from 'react';
import { TabContext } from '../../../../../../ContextStore/TabProvider';
import PricingPageComponent from './PricingPages/PricingPageComponent/PricingPageComponent';

function TabData(){
const tabContext=useContext(TabContext);
const activeTab=tabContext.activeTab;
// ............
const tabContent=[
    <ImageGallery />,
    <div>Content for Tab 2</div>,
    <div>Content for Tab 3</div>,
    <div><PricingPageComponent /></div>,
]
return(
       <section className={classes.tabData}>
          <TabNavbar></TabNavbar>
          {tabContent[activeTab]}
        </section>
)}

export default TabData;