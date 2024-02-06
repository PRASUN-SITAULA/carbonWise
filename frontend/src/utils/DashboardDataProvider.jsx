import React, { useState, createContext, useContext } from "react";
import axios from 'axios'
const DashboardContext = createContext(null);

export const DashboardPageProvider = ({ children }) => {
  //   const [username, setUsername] = useState(null);
  const [household, setHousehold] = useState(null);
  const [transportation, setTransportation] = useState(null)
  const [lifestyle, setLifestyle] = useState(null)
  const [suggestions, setSuggestions] = useState('')


  const setDashboardData = (suggestions, household, transportation, lifestyle) => {
    setHousehold(household * 52.1429 / 1000);
    setTransportation(transportation * 52.1429 / 1000);
    setLifestyle(lifestyle * 52.1429 / 1000);
    setSuggestions(suggestions);
  }
  const fetchData = async () => {
    // if(household == null){
    console.log("Trying to fetch data");
    try {
      const response = await axios.get('http://localhost:3000/carbon-footprint-advisor');

      if (response.status === 200) {
        console.log(response);
        setDashboardData(response.data.data, response.data.electricityCarbonEmission, response.data.transporationCarbonEmission, response.data.totalWasteCarbonEmission)

      } else {
        console.error("fetch failed", response.statusText);
      }
    } catch (err) {
      console.log("Error", err);
    }
    // }
  };

  return (
    <DashboardContext.Provider value={{ suggestions, household, transportation, lifestyle, fetchData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};
