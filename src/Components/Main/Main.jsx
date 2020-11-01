import React from 'react'
import './Main.css'
import {Wifi} from '@material-ui/icons'
const Main = ({download, upload, wifilist}) => {
    return (
        <div className="main">
         <div className="main__left">
            <h1>Currently connected internet</h1>
            <div className="main__connectiondetails">
                <h1>Upload Speed</h1>
                <div className="main__upload">
                <small><span>Bytes Per Second</span><span></span>{upload?.bps}</small>
                <small><span>KilloBytes Per Second</span><span></span>{upload?.kbps}</small>
                <small><span>Megabytes per second</span><span></span>{upload?.mbps}</small>
                </div>
                <h1>Dowload Speed</h1>
                <div className="main__download">
                <small><span>Bytes Per Second</span><span></span>{download?.bps}</small>
                <small><span>KilloBytes Per Second</span><span></span>{download?.kbps}</small>
                <small><span>Megabytes per second</span><span></span>{download?.mbps}</small>
                </div>
            </div>
         </div>
         <div className="main__center">
            <h1>Available WiFi
            </h1>
            {
                wifilist?.networks.map(network=>(
                    <div className="main__wificard" key={network?.mac} title={network?.ssid}>
                        <Wifi/>
                        <h2>{network?.ssid}</h2>
                    </div>
                ))
            }

         </div>
         <div className="main__right">
            <h1>Messages</h1>
            <div className="main__messages">
                <Wifi/>
                <small>{wifilist?.msg}</small>
            </div>
         </div>
        </div>
    )
}

export default Main
