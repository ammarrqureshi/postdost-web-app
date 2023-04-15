// import IconTextLink from './../../../../UI/IconTextLink';
import React, { useContext } from 'react';
import { TabContext } from '../../../../../contexts/TabProvider';
import classes from './../../Influencer.module.css';
import TabSvg from './SvgComponents/TabSvg';

function PricingTabNavbar(){
    const ctx=useContext(TabContext);
    const setActivePricingTab=ctx.setActivePricingTab;
    const activePricingTab=ctx.activePricingTab;
    const greyClr='rgba(14, 14, 14, 0.35)';
    return(
        <section className={classes.pricingNav}>
        <div className={`${classes.tabelement} ${activePricingTab===0 ? classes.activePriceTab : ''}`} 
        onClick={()=> setActivePricingTab(0)}>
        <TabSvg color={activePricingTab==0? 'white' : greyClr}
<<<<<<< HEAD
         width='1.125rem' height ='1.125rem'></TabSvg>
=======
         width='18px' height ='18px'></TabSvg>
>>>>>>> aa05bb4 (Small section left and some little styling)
        <span>Buy a post</span>
        </div>
       {/* ............................................. */}
        <div className={`${classes.tabelement} ${activePricingTab==1 ? classes.activePriceTab : ''}`} 
        onClick={()=> setActivePricingTab(1)}>
        <TabSvg color={activePricingTab==1? 'white' : greyClr}
<<<<<<< HEAD
          width='1.125rem' height ='1.125rem'></TabSvg>
=======
         width='18px' height ='18px'></TabSvg>
>>>>>>> aa05bb4 (Small section left and some little styling)
       <span>Get a subscription</span>
       </div>
       {/* ............................................... */}
      <div className={`${classes.tabelement} ${activePricingTab==2 ? classes.activePriceTab : ''}`} 
       onClick={()=> setActivePricingTab(2)}>
      <TabSvg color={activePricingTab==2? 'white' : greyClr}
<<<<<<< HEAD
        width='1.125rem' height ='1.125rem'></TabSvg>
=======
       width='18px' height ='18px'></TabSvg>
>>>>>>> aa05bb4 (Small section left and some little styling)
      <span>New campaign</span>
      </div>
    </section>
    )
}

export default PricingTabNavbar;