
import './App.css';
import React, { useEffect, useState } from 'react'
import {Main, Menus} from './Components'
const NetworkSpeed = window.require('network-speed'); 
const WiFiControl = window.require('wifi-control');
function App() {
  WiFiControl.init({
    debug: true
  });
 const testNetworkSpeed = new NetworkSpeed();
 const [wifilist, setWifilist] = useState(null)
 const [upload, setUpload] = useState(null)
 const [download, setDownload] = useState(null)

 useEffect(()=>{
  WiFiControl.scanForWiFi((err, response)=> {
    if (err) console.log(err);
      setWifilist(response)
  });
 }, [])
  useEffect(()=>{
    const getDowloadSpeed= async ()=>{
      const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
      const fileSizeInBytes = 50000000;
      const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
      setDownload(speed)
    };
    getDowloadSpeed();
  }, [testNetworkSpeed])
  useEffect(()=>{
    const getUploadSpeed= async ()=>{
      const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const fileSizeInBytes = 2000000
      const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes); setUpload(speed)
      setUpload(speed)
    };
    getUploadSpeed();
  }, [testNetworkSpeed])
    console.clear()
    return (
    <div className="app">
      <Menus/>
       <div className="app__main">
         <Main upload={upload} download={download} wifilist={wifilist}/>
       </div>
    </div>
  );
}

export default App;
