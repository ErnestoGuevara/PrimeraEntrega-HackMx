import React, {useState} from 'react'
import {Fab, TextField, TextareaAutosize, Grid, Button} from '@material-ui/core'
import {ArrowBack, GetApp} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QRcode from 'qrcode.react';
import "../CSS/qrscanner.css";
import Header from './Header';



function QRgenerator() {
    const [qr, setQr] = useState('link');
    const handleChange = (event) => {
        setQr(event.target.value);
        console.log(event.target.value);
    };
    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
      <div className="contenedor-scanner">
          <Header/>
          <div className="conteiner-top">
                <Link to="/">
                <Fab  color="secondary">
                    <ArrowBack/>
                </Fab>
                </Link>
                <h3>QR Generator</h3>
          </div>
            
            <div style={{marginTop:30}}>
                <TextField onChange={handleChange} style={{width:320}}
                value={qr} label="QR content" size="medium" variant="outlined" color="primary" 
                />
            </div>

            <div className="generador-QR">
                {
                    qr ?
                    <QRcode 
                        id="myqr"
                        value={qr} 
                        size={320}
                        includeMargin={true}
                    /> :
                    <p>No QR code preview</p>
                }
            </div>
            <div >
                {
                    
                    <Grid container>
                       
                        <Button variant="contained" onClick={downloadQR} style={{marginBottom:50}} color="secondary">
                            {/* <GetApp/> */}
                            <p>Generar</p>
                        </Button>
                        
                    </Grid> 
                    
                }
            </div>
            {/* <Link to="/plantilla">
                <Button variant="contained" size="medium" color="secondary" >plantilla</Button>
            </Link> */}
            
      </div>
    );
  }
  export default QRgenerator;