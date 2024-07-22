import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MyNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className = "container-fluid">
                    <a className = "navbar-brand" href = "#">Navbar</a>
                    <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation">
                        <span className = "navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id= "navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li classname= "nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li classname= "nav-item dropdown">
                                <a className = "nav-link dropdown-toggle"
                                data-bs-toggle = "dropdown" role = "button" href = "#" aria-expanded = "false" >Features</a>
                                <ul className = "dropdown-menu">
                                    <li><a className = "dropdown-item" href = "#">Action</a></li>
                                    <li><a className = "dropdown-item" href = "#">Another action</a></li>
                                    <li><a className = "dropdown-item" href = "#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MyNavBar;