import bear from '../images/bear.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm border-bottom border-dark">
            <div className="container">
                <div className="justify-content-start col-xs-12 col-md-4">
                    <i className="fa-solid fa-baby-carriage"></i>
                    <a className="navbar-brand" href="#">Baby Starter Pack</a>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid d-block mx-auto" src={bear} />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end col-md-4" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;