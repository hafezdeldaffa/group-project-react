const CardCaseGlobal = ({ cases }) => {
  return (
    <div className="container">
      <div className='card mb-3 mx-auto mt-4 shadow border-0' style={{ maxWidth: '700px' }}>
      <div className='row g-0'>
        <div className='row row-cols-auto'>
          <div className='col mt-2 px-3 align-self-center'>
            <img
              className='rounded mx-auto d-block mt-2'
              src='/images/covid_icon.png'
              alt='People'
              style={{ width: '36px' }}
            />
          </div>
          <div className='col px-6 col-sm-8 mt-4'>
            <h3>Covid Global Data</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='card-body'>
              <h5 className='card-title'>Positif</h5>
              <li className='card-text'>{cases.new_cases}</li>
            </div>
          </div>
          <div className='col'>
            <div className='card-body'>
              <h5 className='card-title'>Sembuh</h5>
              <li className='card-text'>{cases.total_recovered}</li>
            </div>
          </div>
          <div className='col'>
            <div className='card-body'>
              <h5 className='card-title'>Meninggal</h5>
              <li className='card-text'>{cases.new_death}</li>
            </div>
          </div>
        </div>
      </div>
      <p className='mx-4 text-center text-coral fw-bold'>Update Terakhir: 2021-11-09</p>
    </div>
    </div>
  );
};

export default CardCaseGlobal;
