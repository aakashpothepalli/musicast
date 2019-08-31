import React from "react"
import {Button} from "react-bootstrap"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


let i =1
let Socket = require('simple-websocket') 
let socket = new Socket('wss://connect.websocket.in/aakash9518?room_id=1')

class MainContent extends React.Component{
  
    render() {
      return  (
        <div style={{textAlign:'center',paddingTop:'200px'}}>
        
        <div style={{margin: '10px'}}>
        <Link to ="/host">
          <Button><h5> HOST</h5></Button>
        </Link>
        </div>
        
        <div>
          <Link to ="/join">
            <Button style={{margin:'30sp'}}><h5>JOIN</h5></Button>
          </Link>
        
        </div>

       

        </div>
      )
    };
    
}
export default MainContent