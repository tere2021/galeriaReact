import React from 'react'
import { Link } from "react-router-dom";
import Primera3 from '../images/1.jpg'
import Segunda3 from '../images/2.jpg'
import Tercera3 from '../images/3.jpg'
import Cuarta3 from '../images/4.jpg'
import Quinta3 from '../images/5.jpg'
import Sexta3 from '../images/6.jpg'
import Septima3 from '../images/7.jpg'
import Octava3 from '../images/8.jpg'
import Novena3 from '../images/9.jpg'

const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
            <Link to="/Primera"className="links">
                <figure>
                    <img src={Primera3}  alt="" className="tamaño-img"/>
                    <figcaption>Primera</figcaption>
                </figure>
            </Link>
            <Link to="/Segunda" className="links">
                <figure>
                    <img src={Segunda3}  alt="" className="tamaño-img"/>
                    <figcaption>Segunda</figcaption>
                </figure>
            </Link>
            <Link to="/Tercera" className="links">
                <figure>
                    <img src={Tercera3} alt="" className="tamaño-img"/>
                    <figcaption>Tercera</figcaption>
                </figure>
            </Link>
            <Link to="/Cuarta" className="links">
                <figure>
                    <img src={Cuarta3}  alt="" className="tamaño-img"/>
                    <figcaption>Cuarta</figcaption>
                </figure>
            </Link>
            <Link to="/Quinta" className="links">
                <figure>
                    <img src={Quinta3}  alt="" className="tamaño-img"/>
                    <figcaption>Quinta</figcaption>
                </figure>
            </Link>
            <Link to="/Sexta" className="links">
                <figure>
                    <img src={Sexta3} alt="" className="tamaño-img"/>
                    <figcaption>Sexta</figcaption>
                </figure>
            </Link>
            <Link to="/Septima" className="links">
                <figure>
                    <img src={Septima3} alt="" className="tamaño-img"/>
                    <figcaption>Septima</figcaption>
                </figure>
            </Link>
            <Link to="/Octava" className="links">
                <figure>
                    <img src={Octava3}  alt="" className="tamaño-img"/>
                    <figcaption>Octava</figcaption>
                </figure>
            </Link>
            <Link to="/Novena" className="links">
                <figure>
                    <img src={Novena3} alt="" className="tamaño-img"/>
                    <figcaption>Novena</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion;
