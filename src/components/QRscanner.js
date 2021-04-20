import React, {useState} from 'react'
import {Fab, TextareaAutosize,Button} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import "../CSS/qrscanner.css";
import Header from "../components/Header";

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data);
            window.location.replace(data);
            console.log(data);
        }
    }
    const handleError = err => {
    console.error(err)
    }


    return (
        <div>
            <Header/>

            <div className="contenedor-scanner" style={{width: "100%", height: "100vh"}}>
         
                <div className="conteiner-top">
                <Link to="/">
                    <Fab  size="medium" color="secondary">
                    <ArrowBack/>
                    </Fab>
                </Link>
                
                <h3>QR Scanner</h3>
                
                </div>
                
                <div className="camara">
                    <QrScan
                        delay={1000}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ height: 240, width: 320 }}
                    />
                </div>

                {/* <div >
                    <TextareaAutosize
                        style={{fontSize:18, width:320, height:100}}
                        rowsMax={4}
                        // defaultValue={qrscan}
                        value={qrscan}
                    />

                </div> */}
                
                {/* <Link to="/Perfil">
                    <Button variant="contained" size="medium" color="secondary" >Perfil</Button>
                </Link> */}



     </div>

        </div>
     
    );
  }
  export default QRscanner;