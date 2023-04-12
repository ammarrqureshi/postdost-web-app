import React ,{ useContext } from 'react';
import classes from './TabNavbar.module.css';
import Link from '../../../../../UI/Link';
import { TabContext } from '../../../../../../ContextStore/TabProvider';

function TabNavbar(){
  const tabContext=useContext(TabContext);
  const activeTab=tabContext.activeTab;
  const setActiveTab=tabContext.setActiveTab;
  
    return (
    <div className={classes.tabNav}>
    <Link onClick={()=> setActiveTab(0)} 
    className={`${activeTab===0? "active" : ''}`}>Posts</Link>
    <Link onClick={()=> setActiveTab(1)} 
    className={`${activeTab===1 ? "active ": ''}`}>Analytics</Link>
    <Link onClick={()=> setActiveTab(2)} 
    className={`${activeTab===2?  "active" : ''}`}>Guidelines</Link>
    <Link onClick={()=> setActiveTab(3)} 
    className={`${activeTab===3?  "active" : ''}`}>Pricing</Link>
    </div>
    )
}

export default TabNavbar;