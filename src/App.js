import React from 'react';
import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import './styles/css/style.css';
import IndonesiaData from './container/IndonesiaData';
import GlobalData from './container/GlobalData';
import { IndoContextProvider } from './context/IndonesiaContext';

function App() {
  return (
    <React.Fragment>
      <IndoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/indonesia' element={<IndonesiaData />}></Route>
            <Route path='/global' element={<GlobalData />}></Route>
          </Routes>
        </BrowserRouter>
      </IndoContextProvider>
    </React.Fragment>
  );
}

export default App;
