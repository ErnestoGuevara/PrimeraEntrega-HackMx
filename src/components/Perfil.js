import Header from "./Header";
import React,{Fragment,useState,useEffect} from 'react';
import Data from "../json/personas.json"
import USUARIO from "../img/usuario.png";
import "../CSS/perfil.css";

const Perfil = () => {
    

    return ( 
        <Fragment >
             <Header/>
        <div className="contenedor-principal">
           
            <div className="contenedor-perfil">
                <img src={USUARIO} alt="Usuario"></img>
                <div className="informacion">
                    <div className="nombre-sexo">
                        <div className="nombre">
                            <h3>Nombre: </h3>
                           
                            <p>NOMBRE APELLIDO M APELLIDO P </p>
                        </div>
                        <div className="sexo">
                            <h3>Sexo: </h3>
                            <p>SEXO</p>
                        </div>
                    </div>

                    <div className="domicilio">
                        <h3>Domicilio: </h3>
                        <p>CALLE,COLONIA,ESTADO,PAIS</p>

                    </div>

                    <div className="clave">
                        <h3>Clave de elector: </h3>
                        <p>12345678900</p>
                    </div>

                    <div className="curp-año">
                        <div className="curp">
                            <h3>CURP: </h3>
                            <p>hmtlw263qe43i6929</p>
                        </div>
                        <div className="sexo">
                            <h3>Año de registro: </h3>
                            <p>2050</p>
                        </div>
                    </div>

                    <div className="fecha-seccion-vigencia">
                        <div className="fecha">
                            <h3>Fecha de nacimiento: </h3>
                            <input type="date"></input>
                        </div>
                        <div className="seccion">
                            <h3>Seccion: </h3>
                            <p>00007</p>
                        </div>

                        <div className="vigencia">
                            <h3>Vigencia: </h3>
                            <p>2027</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
       
        </Fragment>
       
     );
}
 
export default Perfil;