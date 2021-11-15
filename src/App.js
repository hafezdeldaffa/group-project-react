import React from 'react';
import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import './styles/css/style.css';
import IndonesiaData from './container/IndonesiaData';
import GlobalData from './container/GlobalData';
<<<<<<< HEAD
import { IndoContextProvider } from './context/IndonesiaContext';
import { ProvinceContextProvider } from './context/ProvinceContext';
import { IndonesiaDailyContextProvider } from './context/IndonesiaDailyContext';

=======
>>>>>>> hafezd

function App() {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <IndoContextProvider>
        <ProvinceContextProvider>
          <IndonesiaDailyContextProvider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/indonesia' element={<IndonesiaData />}></Route>
            <Route path='/global' element={<GlobalData />}></Route>
          </Routes>
        </BrowserRouter>
        </IndonesiaDailyContextProvider>
        </ProvinceContextProvider>
      </IndoContextProvider>
=======
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/indonesia' element={<IndonesiaData />}></Route>
          <Route path='/global' element={<GlobalData />}></Route>
        </Routes>
      </BrowserRouter>
>>>>>>> hafezd
    </React.Fragment>
  );
}

export default App;
