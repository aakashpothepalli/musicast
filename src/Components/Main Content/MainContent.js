import React from "react"
import {Button} from "react-bootstrap"
class MainContent extends React.Component{
constructor(){
  super()
  document.body.style = 'background: black;'
}
    render() {
      return (
        <Button style={{color: 'white'}}>
         hi there
        </Button>
      )
    };
    
}

export default MainContent