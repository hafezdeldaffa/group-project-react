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
