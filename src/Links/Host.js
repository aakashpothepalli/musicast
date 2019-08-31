import React from "react"
import {Button} from "react-bootstrap"


let Socket = require('simple-websocket') 
let socket = {}


class Host extends React.Component{
    
    constructor(){
        super()
        this.state={
            data:""
            
        }
        socket= new Socket('wss://connect.websocket.in/aakash9518?room_id=1')
              this.handleError = this.handleError.bind(this)
              this.handleScan = this.handleScan.bind(this)
    } 

   
    
    render(){
    return(
        <div>
          <Button  onClick={()=>{

            alert("sent")
            let i=1
            function f() {
              socket.send( i );
              i++;
              if( i < 100 ){ 
                  setTimeout( f, 500);
              }
          }
          f()
            
          }}> send something</Button>



          <p>{this.state.url}</p>
        </div>
    )
}
}

export default Host