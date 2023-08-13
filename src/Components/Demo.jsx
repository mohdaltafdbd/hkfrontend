import React from 'react'
import socketIO from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000/';
const socket = socketIO(ENDPOINT,{transports:['websocket']});

const Demo = () => {

    socket.on("connect",()=>{
        console.log("new connection");
    })


  return (
    <div>demo</div>
  )
}

export default Demo