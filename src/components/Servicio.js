import React from "react";
import '../App.css'
import funeral from '../assets/images/Funeral_Home.jpeg'
import ceremonia from '../assets/images/ceremonia.jpg'
import iglesia from '../assets/images/st_viator.jpeg'

export default function Servicio() {
    return (
        <div className="servicos">
            <div className="cards_container">
                <h1>Servicios</h1>
                <div className="cards_wrapper">
                    <div className="cards-items">
                        <h2 className="srv">Visitas</h2>
                        <img className="card" src={funeral}></img>
                        <h3>Sabado Abril 2, 2022</h3>
                        <h3>Hora: 4pm - 8pm</h3>
                        <h4>Lugar</h4>
                        <h5>Montclair-Lucania Funeral Home</h5>
                        <p>6901 West Belmont Ave. Chicago, IL 60634</p>
                        <a href="https://www.dignitymemorial.com/es-es/obituaries/chicago-il/fabiola-cardona-lopez-10635179"
                            target="_blank" rel="noreferrer">Mas Informacion</a>
                    </div>
                    <div className="cards-items">
                        <h2 className="srv">Ceremonia</h2>
                        <img className="card" src={ceremonia}></img>
                        <h3>Sabado Abril 2, 2022</h3>
                        <h3>Hora: 6pm - 7pm</h3>
                        <h4>Lugar</h4>
                        <h5>Montclair-Lucania Funeral Home</h5>
                        <p>6901 West Belmont Ave. Chicago, IL 60634</p>
                        <a href="">Ver video</a>
                    </div>
                    <div className="cards-items">
                        <h2 className="srv">Misa</h2>
                        <img className="card" src={iglesia}></img>
                        <h3>Domingo Mayo 8, 2022</h3>
                        <h3>Hora: 1pm - 2pm</h3>
                        <h4>Lugar</h4>
                        <h5>Iglesia Catolica St. Viator</h5>
                        <p>4170 W Addison St, Chicago, IL 60641</p>
                        <a href="https://www.ssviatorwences.org/" target="_blank" rel="noreferrer">Ver Iglesia</a>
                    </div>
                </div>
            </div>
        </div>
    );
}