import React from "react"
import {Button} from "react-bootstrap"
import NavHeader from "../Components/Nav Header/NavHeader"
import QrReader from 'react-qr-scanner'
import Firebase from "firebase"
import ReactPlayer from "react-player"



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
            DownloadURL:"",
            playing:false
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
        let firstMessage = true
        socket.onmessage = (e)=>{
            let data = e.data
            console.log(data)
            
            if(firstMessage){
                this.setState({DownloadURL:data.toString(),playing:true})
            this.DownloadFile()
                firstMessage=false
            }
            else{
                let playTime = data
                console.log(new Date().getTime())
                let secondsleft = new Date().getTime() - playTime
                setTimeout(()=>{this.setState({playing: true})},secondsleft*1000)
                
            }
        }     
        }
    }
     DownloadFile (){
         console.log(this.state.DownloadURL)
        
        storageRef.child(this.state.DownloadURL).getDownloadURL().then((url)=> {
           this.setState({
               audioURL:url
           })
          }).catch((error)=> {
           console.log(error)
          });
    }
    onSeek=()=>{

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
        <div hidden={!this.state.isScanComplete}>Connected : The music will start as soon as the host sends </div> 
        <h5>{this.state.data}</h5>
        <Button onClick={()=> this.setState({playing:true})}>Play</Button>
        <ReactPlayer url ={this.state.audioURL} width="100%" height = "100%" playing={this.state.playing}/>
        
        </div>
    )
    }
}

export default Join