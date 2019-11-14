import React from "react"
import "./MainContent.css"


class MainContent extends React.Component{
  
    render() {
      return  (
        <div className="row text-center h-100 align-items-center ">

          <div className=" mb-5  col-sm-6 align-self-center ">
            <h3>Click here to host the song</h3>
            <button type="button" className="host btn btn-primary col-6  " onClick={()=>window.open("/host","_self")}> HOST </button>
          </div>

          <div className="col-sm-6 mb-5"  >       
            <h3>Click here to join a group</h3>     
            <button type="button" className="join btn btn-primary col-6 " onClick={()=>window.open("/join","_self")}> JOIN </button>
          </div>

        </div>    

      )
    };
    
}
export default MainContent