import React, { useContext } from 'react';
import CardCase from '../components/CardCase';
import Navbar from '../components/Navbar';
import { IndonesiaContext } from '../context/IndonesiaContext';

const IndonesiaData = () => {
  const [cases] = useContext(IndonesiaContext);

  return (
    <React.Fragment>
      <Navbar />
      {cases.map((cases) => {
        return <CardCase key={cases.length} cases={cases} />;
      })}
    </React.Fragment>
  );
};

export default IndonesiaData;
