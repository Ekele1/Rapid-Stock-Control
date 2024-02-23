import { useEffect, useState } from 'react';
import './qrcode.css'

import { Html5QrcodeScanner } from 'html5-qrcode'

const QrCodeScanner =()=>{

    const [scanresult, setScanresult]= useState(null);

    useEffect(()=>{
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 200,
                height: 200,
            },
            fps: 5,
        });
    
        
    
        const success=(result)=>{
            scanner.clear()
            setScanresult(result)
        }
    
        const error=(err)=>{
            console.warn(err)
        }

        scanner.render(success, error)
    },[])


    return(
        <div className="scannerk">
            <div className="scan">
                <h1>Qr code scanning</h1>
                {
                    scanresult? <div><a href={"http://" + scanresult}></a>{scanresult}</div>:<div id='reader'></div>
                }
            </div>
            
            
        </div>
    )
}

// export default QrCodeScanner