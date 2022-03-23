import "../styles/header.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
function Header() {

    const [menu, setShow] = useState(false)
    const check = () => {
        toggleMenu = toggleMenu.bind();
    }
    const toggleMenu = () => {
        setShow(!menu)
    }
    const show = (menu) ? "show" : "";


    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-sm header-navbar">
                <div className="container-fluid navbar-container-inner">
                    <div className="navbar-brand" href="javascript:void(0)">
                        <div className="navbar-logo" data-toggle="imagelogo"></div>
                        <a className="navbar-name"><span>PVD</span></a>
                    </div>
                    <form className="d-flex form-search">
                        <input className="form-control me-2 input-search" type="text" placeholder="Search " />
                        <div className="button-search"></div>
                    </form>
                    <div className="navbar-login">
                        <a className="link-login" href="#">Login</a>
                        <div className="account-cirle"></div>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-sm second-navbar">
                <div className="container-fluid">
                    <div className="navbar-brand nav-label" href="javascript:void(0)">
                        <a className="label-name"><span>Oneday</span></a>
                        <a className="label-title"><span>My personal blog</span></a>
                    </div>
                    <div className="navbar-link-container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">

                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">News</a>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Favorite</a> */}
                                    <a className={"nav-link"} href="javascript:void(0)" onClick={toggleMenu}>Favorite</a>
                                    <ul className={"dropdown-menu " + show}>
                                        <li><a className="dropdown-item" href="#" onClick={toggleMenu}>Link</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={toggleMenu}>Another link</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={toggleMenu}>A third link</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={toggleMenu}>A four link</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={toggleMenu}>A five link</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Daily life</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;