import React from "react";
import { Link } from "react-router-dom"
import '../assets/css/Navbar.css';
import foto from '../assets/images/Abuelita.png'

function Sidebar() {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="text">En Memoria de
                </div>
                <Link to="/" className="nav-links">
                    <img className="foto" src={foto} alt="Abueleita"></img>
                    <div className="name">Fabiola Cardona Lopez</div>
                </Link>
                <hr></hr>
                <ul className="list">
                    <li>
                        <Link to="/Biografia" className="nav-links">Biografia</Link></li>
                    <li>
                        <Link to="/Memoria" className="nav-links">En su Memoria</Link></li>
                    <li>
                        <Link to="/Servicios" className="nav-links">Servicios</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar