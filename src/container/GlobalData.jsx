import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../context/GlobalContext';
import CountriesDataTable from '../components/CountriesDataTable';
import SortAndSearchCountries from '../components/SortAndSearchCountries';
import CardCaseGlobal from '../components/CardCaseGlobal';
import Footer from '../components/Footer';
import { GlobalDataContext } from '../context/GlobalDataContext';

const GlobalData = () => {
  const [...value] = useContext(GlobalContext);
  const [GlobalData] = useContext(GlobalDataContext)
  console.log(value);

  return (
    <React.Fragment>
      <div className='bg-light'>
      <Navbar />
      <CardCaseGlobal
        key={GlobalData.length}
        cases={GlobalData}
      />
      <SortAndSearchCountries></SortAndSearchCountries>
      <CountriesDataTable></CountriesDataTable>
      <Footer/>
      </div>
    </React.Fragment>
  );
};

export default GlobalData;
