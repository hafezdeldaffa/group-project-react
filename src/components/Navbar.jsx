const Navbar = () => {
    return (
        <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{backgroundColor: '#2647bd'}}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Neimo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Beranda</a>
            <a className="nav-link" href="/">Informasi</a>
            <a className="nav-link" href="/">Kasus Covid</a>
            <a className="nav-link" href="/">Fitur</a>
          </div>
        </div>
        <a className="nav-link text-white" href="/">Masuk</a>
      </div>
    </nav>
    )
}

export default Navbar