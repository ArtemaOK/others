function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm border-bottom border-dark">
            <div className="container col-12">
                <div className="col-3 justify-content-start">
                    <i class="fa-solid fa-baby-carriage"></i>
                    <a className="navbar-brand" href="#">Baby Starter Pack</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item col">
                            <a class="nav-link" href="#">Productos</a>
                        </li>
                        <li class="nav-item col">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                        <li class="nav-item col">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;