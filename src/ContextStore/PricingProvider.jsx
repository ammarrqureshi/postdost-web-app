import React, { createContext } from "react";

// create a new context for the pricing data
export const PricingContext = createContext([]);

// create a new component to provide the pricing data to its children
export const PricingProvider = (props) => {
  // define your pricing data as an array of objects
  const pricingData = [
    {
      packageName: "Silver",
      price: "$20",
      description: "Perfect plan for starter",
      details: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6"
      ]
    },
    {
      packageName: "Gold",
      price: "$40",
      description: "Perfect plan for starter",
      details: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6"
      ]
    },
    {
      packageName: "Diamond",
      price: "$100",
      description: "Perfect plan for starter",
      details: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6"
      ]
    }
  ];


  return (
    <PricingContext.Provider value={pricingData}>
      {props.children}
    </PricingContext.Provider>
  );
};

export default PricingProvider;