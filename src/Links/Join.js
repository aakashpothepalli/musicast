import React from "react"

import QrReader from 'react-qr-scanner'

let Socket = require('simple-websocket') 
let socket = {}


class Join extends React.Component{
    
    constructor(){
        super()
        this.state={
            data:"",
            url:""  
        }
        socket= new Socket('wss://connect.websocket.in/aakash9518?room_id=1')
              
        socket.on("data",(data)=>{
            console.log(data.toString())
            this.setState({
                data:data.toString()
            })
        })
        this.handleError = this.handleError.bind(this)
              this.handleScan = this.handleScan.bind(this)
    } 
   
    handleScan(data){
        this.setState({
            url:data
        })
       }
       handleError(err){
         console.error(err)
       }
    
    render(){
    return(
        <div >

<h2> {this.state.url}</h2>
            
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan} 
        
          />
        
        
        </div>
    )
}
}

export default Join