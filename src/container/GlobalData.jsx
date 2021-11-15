<<<<<<< HEAD
import React from "react"
import Navbar from "../components/Navbar"
import { CountriesContextProvider } from "../context/CountriesContext"
import CountriesDataTable from "../components/CountriesDataTable"
import SortAndSearchCountries from "../components/SortAndSearchCountries"

const GlobalData = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <CountriesContextProvider>
                <SortAndSearchCountries></SortAndSearchCountries>
                <CountriesDataTable></CountriesDataTable>
            </CountriesContextProvider>
        </React.Fragment>
    )
}

export default GlobalData
=======
import React, { useContext } from 'react';
import CardCaseGlobal from '../components/CardCaseGlobal';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../context/GlobalContext';

const GlobalData = () => {
  const [...value] = useContext(GlobalContext);
  console.log(value);

  return (
    <React.Fragment>
      <Navbar />
      <CardCaseGlobal
        key={value.length}
        positif={value[0]}
        meninggal={value[1]}
        sembuh={value[2]}
      />
    </React.Fragment>
  );
};

export default GlobalData;
>>>>>>> hafezd
