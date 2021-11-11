import React, { useContext } from 'react';
import { ProvinceContext } from '../context/ProvinceContext';
import Search from '../components/Search';
import Sort from '../components/Sort';

const SortAndSearch = () =>{
    
  const [ProvCases] = useContext(ProvinceContext);
    return(
      <div class="container mt-4">
      <div class="row">
        <div class="col-2 col-md-6">
          <Sort />
        </div>
        <div class="col-10 col-md-6">
          <Search ProvCases={ProvCases} />
        </div>
      </div>
    </div>
    )
}

export default SortAndSearch;