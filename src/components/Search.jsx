import { useState } from "react";

const Search = ({ ...data }) => {
    const [search, setSearch] = useState('');
    const found = data.ProvCases.find(({ provinsi }) => {
        const result = provinsi.toLowerCase().indexOf(search.toLowerCase());

        if(result >=0){
            return true
        }else{
            return false
        }
    })
    return (
        <>
            <div className="container  my-3">
                <div className="search-box">
                    <a className="search-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img className="btn-icon" src="/images/search.png" />
                    </a>
                    <input className="search-input mx-3" type="text" name="" placeholder="Pencarian" minlength={4} onChange={(c) => setSearch(c.target.value)} />
                </div>
            </div>
            
            <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-coral" id="staticBackdropLabel">Hasil Pencarian</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {
                                found === undefined ? <h1>Not Found</h1> :
                                    <>
                                        <h1 className="text-center text-capitalize mb-4">Provinsi {found.provinsi.toLowerCase()}</h1>

                                        <div id="card" class="row g-2">
                                        <div class="col-sm-6 col-12">
                                            <div class="card w-100 border-primary bg-search-card bg-gradient">
                                                <div class="card-body">
                                                    <h5 class="card-title text-capitalize text-white">Positif</h5>
                                                    <h2 class="card-text fw-bold text-white">{found.kasus}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-12">
                                            <div class="card w-100 border-primary bg-search-card bg-gradient">
                                                <div class="card-body">
                                                    <h5 class="card-title text-capitalize text-white">Sembuh</h5>
                                                    <h2 class="card-text fw-bold text-white">{found.sembuh}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-12">
                                            <div class="card w-100 border-primary bg-search-card bg-gradient">
                                                <div class="card-body">
                                                    <h5 class="card-title text-capitalize text-white">Meninggal</h5>
                                                    <h2 class="card-text fw-bold text-white">{found.meninggal}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-12">
                                            <div class="card w-100 border-primary bg-search-card bg-gradient">
                                                <div class="card-body">
                                                    <h5 class="card-title text-capitalize text-white">Dirawat</h5>
                                                    <h2 class="card-text fw-bold text-white">{found.dirawat}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;