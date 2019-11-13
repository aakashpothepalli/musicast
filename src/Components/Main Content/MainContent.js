import React from "react"
import {  Link  } from 'react-router-dom'
import "./MainContent.css"


class MainContent extends React.Component{
  
    render() {
      return  (
        <div className="mc m-auto row">
        
          <button type="button" className="host btn col-6  " onClick={()=>window.open("/host","_self")}> HOST</button>
        
            <button type="button" className="join btn col-6 " onClick={()=>window.open("/join","_self")}> JOIN </button>


        </div>
      )
    };
    
}
export default MainContent