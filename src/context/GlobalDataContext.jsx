import React, { createContext, useState, useEffect } from 'react';

export const GlobalDataContext = createContext();

export const GlobalDataContextProvider = (props) => {
  const [GlobalData, setGlobalData] = useState([]);

  useEffect(() => {
    fetch('https://covid-rest.herokuapp.com/summary')
      .then((res) => res.json())
      .then((result) => {
        setGlobalData(result.data);
        console.log(result.data)
      });
  }, []);

  return (
    <GlobalDataContext.Provider value={[GlobalData, setGlobalData]}>
      {props.children}
    </GlobalDataContext.Provider>
  );
};