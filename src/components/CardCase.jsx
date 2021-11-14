const CardCase = ({ ...data }) => {
  return (
    <div className='container'>
      <div className='card mb-3 mx-auto mt-4 shadow border-0 ' style={{ maxWidth: '700px'}}>
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
            <h3>Covid in {data.cases.name}</h3>
          </div>
        </div>
        <div className='row mb-4 px-4'>
          <div className='col-12 col-md-3 col-sm-6 '>
            <div className='card-body'>
              <h5 className='card-title'>Positif</h5>
              <p className='card-text'># {data.cases.positif}</p>
            </div>
          </div>
          <div className='col-12 col-md-3 col-sm-6'>
            <div className='card-body'>
              <h5 className='card-title'>Sembuh</h5>
              <p className='card-text'># {data.cases.sembuh}</p>
            </div>
          </div>
          <div className='col-12 col-md-3 col-sm-6'>
            <div className='card-body'>
              <h5 className='card-title'>Meninggal</h5>
              <p className='card-text'># {data.cases.meninggal}</p>
            </div>
          </div>
          <div className='col-12 col-md-3 col-sm-6'>
            <div className='card-body'>
              <h5 className='card-title'>Dirawat</h5>
              <p className='card-text'># {data.cases.dirawat}</p>
            </div>
          </div>
        </div>
      </div>
        <p className='mx-4 text-end text-coral'>Update Terakhir: 2021-11-09</p>
    </div>
    </div>
  );
};

export default CardCase;