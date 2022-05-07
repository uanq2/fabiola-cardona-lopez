import React from "react";
import mainImage from "../assets/images/Abuelita2.png";
import '../App.css'

export default function Home() {
    return (
        <div className="home-container">
            <h1> Recordando a nuestra Madre, Abuela y Bisabuela!</h1>
            <img className="main-image" src={mainImage} alt="Imagen de Fabiola Cardona"></img>
            <h2>Diciembre 2, 1928 – Marzo 17, 2022</h2>
            <h1> Que en Paz Descanses! </h1>
        </div>
    );
}