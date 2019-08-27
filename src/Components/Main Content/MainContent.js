import React from "react"
import {Button} from "react-bootstrap"
class MainContent extends React.Component{

    render() {
      return  (
        <div style={{textAlign:'center',paddingTop:'200px'}}>
        
        <div style={{margin: '10px'}}>
        <Button><h5> HOST</h5></Button>
        </div>

        <div>
        <Button style={{margin:'30sp'}}><h5>JOIN</h5></Button>
        </div>

        </div>
      )
    };
    
}

export default MainContent