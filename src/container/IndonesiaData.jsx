import React, { useContext } from 'react';
import CardCase from '../components/CardCase';
import Navbar from '../components/Navbar';
import { IndonesiaContext } from '../context/IndonesiaContext';
import ProvinceDataTable from '../components/ProvinceDataTable';
import { ProvinceContext } from '../context/ProvinceContext';
import ChartIndo from '../components/ChartIndo';
import SortAndSearch from '../components/SortAndSearch';
import { IndonesiaDailyContext } from '../context/IndonesiaDailyContext';
import { IndonesiaDailyContextProvider } from '../context/IndonesiaDailyContext';

const IndonesiaData = () => {

  const [cases] = useContext(IndonesiaContext);
  const [ProvCases] = useContext(ProvinceContext);
  

  return (
    <React.Fragment>
      <div className="bg-light">
        <Navbar />
        {cases.map((cases) => {
          return <CardCase key={cases.length} cases={cases} />;
        })}
        <IndonesiaDailyContextProvider>
        <ChartIndo/>
        </IndonesiaDailyContextProvider>
        <SortAndSearch />
        <ProvinceDataTable key={ProvCases.length} ProvCases={ProvCases} />
      </div>
    </React.Fragment>
  );
};

export default IndonesiaData;
