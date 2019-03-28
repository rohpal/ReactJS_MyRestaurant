import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return(
        <div style={{zIndex:'100', position:'relative'}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse collapse w-100">
                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link p-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link p-3" to="/menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link p-3" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link p-3" to="/booking">Booking</Link>
                    </li>
                </ul>
        </div>
        </nav>
        </div>
    );

}   

export default Header;