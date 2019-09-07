import React from "react"
import {Button} from "react-bootstrap"
import NavHeader from "../Components/Nav Header/NavHeader"
import QrReader from 'react-qr-scanner'
import Firebase from "firebase"
import ReactPlayer from "react-player"
import { Buffer } from "buffer";


let socket = null
let storageRef = Firebase.storage().ref()

class Join extends React.Component{
    
    constructor(){
        super()
        this.state={
            data:"",
            ScanURL:"" ,
            RoomID:"",
            isCamHidden:true ,
            isScanComplete:false,
            audioURL:null,
            DownloadURL:""
        }
        


        this.handleError = this.handleError.bind(this)
        this.handleScan = this.handleScan.bind(this)
        this.DownloadFile = this.DownloadFile.bind(this)

    } 
   
   componentDidMount(){
   
   }
    handleScan(data){
        if(data!==null&& this.state.isScanComplete===false){
        console.log(data)
        this.setState({
            RoomID:data.toString(),
            isScanComplete:true
        }) 
        socket= new WebSocket("wss://connect.websocket.in/aakash9518?room_id="+data.toString())   

        socket.onmessage = (e)=>{
            console.log(e.data)
            this.setState({DownloadURL:e.data.toString()})
            this.DownloadFile()
        }     
        }
    }
     DownloadFile (){
         console.log(this.state.DownloadURL)
         alert("Your song will play shortly")
        storageRef.child(this.state.DownloadURL).getDownloadURL().then((url)=> {
           this.setState({
               audioURL:url
           })
          }).catch((error)=> {
           console.log(error)
          });
    }
    handleError(err){
         console.error(err)
       }
    
    render(){
    return(
        <div>
        <NavHeader/>
        <h3 hidden = {!this.state.isScanComplete}>Room ID : {this.state.RoomID}</h3>        
        <div style={{width: "70%",height:"70%",textAlign:"center"}} hidden={this.state.isScanComplete}>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan} 
          style={{width:"100%"}}/> 
          </div>
        <div hidden={!this.state.isScanComplete}>connected</div> 
        <h5>{this.state.data}</h5>
        <Button onClick={()=>this.DownloadFile()}>Download</Button>
        <ReactPlayer url ={this.state.audioURL} playing/>
        
        </div>
    )
}
}

export default Join