
const ServiveInfo = () => {
    return (
        <div className="serviceInfo-bg">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="container">
                <div className="carousel-inner px-4">
                    <div className="carousel-item active " >
                        <div className="row">
                            <div className="col-12 col-lg-4 col-sm-12 px-4">
                                <h4 className="serviceInfo-h4 mb-lg-4 mb-2">Cari Rumah Sakit</h4>
                                <p className="text-white">Temukan lokasi serta kontak dari rumah sakit terdekat sekitar Anda dengan cepat.</p>
                                <a href="https://yankes.kemkes.go.id/app/siranap/" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-md serviceInfo-btn px-4 me-md-2 mb-3">
                                    Selengkapnya
                                </button>
                                </a>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12  px-4">
                                <h4 className="serviceInfo-h4 mb-lg-4 mb-2">Cari Ambulans</h4>
                                <p className="text-white">Laporkan keadaan darurat dan dapatkan pelayanan ambulans dengan segera.</p>
                                <a href="https://www.wargabantuwarga.com/provinces?kebutuhan=Ambulans" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-md serviceInfo-btn px-4 me-md-2 mb-3">
                                    Selengkapnya
                                </button>
                                </a>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12  px-4">
                                <h4 className="serviceInfo-h4 mb-lg-4 mb-2">Cari Donor Plasma</h4>
                                <p className="text-white">Layanan bantuan untuk menemukan donor plasma darah bagi penderita COVID-19.</p>
                                <a href="https://www.wargabantuwarga.com/provinces?kebutuhan=Donor%20plasma" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-md serviceInfo-btn px-4 me-md-2 mb-3">
                                    Selengkapnya
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                    <div className="row">
                            <div className="col-12 col-lg-4 col-sm-12 px-4">
                                <h4 className="serviceInfo-h4 mb-lg-4 mb-2">Cari Info Donasi</h4>
                                <p className="text-white">Temukan informasi-informasi terkait penyaluran donasi</p>
                                <a href="https://www.wargabantuwarga.com/donasi" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-md serviceInfo-btn px-4 me-md-2 mb-3">
                                    Selengkapnya
                                </button>
                                </a>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12  px-4">
                                <h4 className="serviceInfo-h4 mb-lg-4 mb-2">Cari Oksigen</h4>
                                <p className="text-white">Temukan layanan bantuan oksigen bagi penderita COVID-19.</p>
                                <a href="https://www.wargabantuwarga.com/provinces?kebutuhan=Oksigen" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-md serviceInfo-btn px-4 me-md-2 mb-3">
                                    Selengkapnya
                                </button>
                                </a>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12  px-4">
                                <h4 className="serviceInfo-h4 mb-lg-4 mb-2">Cari Kontak Darurat</h4>
                                <p className="text-white">Layanan Kontak darurat dari begbagai instansi untuk anda mencari bantuan .</p>
                                <a href="https://www.wargabantuwarga.com/kontak-darurat" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-md serviceInfo-btn px-4 me-md-2 mb-3">
                                    Selengkapnya
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ServiveInfo;