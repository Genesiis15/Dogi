import './Navbar.css'
import navbarperro from '../assets/navbarperro-removebg-preview.png'

export const Navbar = () => {
    return <>
        <nav className='fixed-top  navbar  navbar-expand-lg mb-5 bg-white'>
            <div className='container-fluid  '>

                <div className='navbar-brand navImg'>
                    <img className='navImg' src={navbarperro} />

                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse  justify-content-center' id="navbarSupportedContent">
                    <ul className=' navbar-nav m-auto mb-2 mb-lg-0'>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Imagen">Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#SectionII">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Comment">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Footer">Contacte Ve</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className=" me-2 searcht" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>

            </div>

        </nav>


    </>
}