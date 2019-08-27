import React from "react"
import {Button} from "react-bootstrap"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
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