import React, {Fragment} from 'react';
import "../CSS/gracias.css";
import Header from "../components/Header";


const Gracias = () => {

    return (  
        <Fragment >
            <Header/>
            <h1 className="titulo-gracias">Gracias por votar</h1>
            {setTimeout(() => {
                window.location.replace("/");
            }, 2000)}
           
        </Fragment>
        
    );
}
 
export default Gracias;