import React, { createContext, useState } from 'react';
import { Persons } from '../Data/Influencer';

export const ExploreContext = createContext();

const ExploreProvider = (props) => {
  //States to get the form data
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState(Persons);

  //For Followers
  const [follower, setFollowerValue] = React.useState(30);
  //For Pricing
  const [priceRange, setPriceValue] = React.useState([100, 200]);
  //For Skill
  const [category, setCategory] = React.useState([]);

  return (
    <ExploreContext.Provider
      value={{
        filterText,
        setFilterText,
        filteredData,
        setFilteredData,
        follower,
        setFollowerValue,
        priceRange,
        setPriceValue,
        category,
        setCategory,
        Persons,
      }}
    >
      {props.children}
    </ExploreContext.Provider>
  );
};

export default ExploreProvider;
