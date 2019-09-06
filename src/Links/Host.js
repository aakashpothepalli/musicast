import React from "react"
import {Button} from "react-bootstrap"
import axios from "axios"
import JsxParser from "react-jsx-parser"
import Firebase from "../firebase"
import {blobToBinaryString} from "blob-util"
let Socket = require('simple-websocket') 
let socket = null
let url=""
class Host extends React.Component{
    
    constructor(){
        super()
        this.state={
            data:"hi there",
            qrImgComponent:null,
            selectedFile:null,
            UploadedText:""
            
        }
         /////// creating new sockectroom
       const roomId = Math.random().toString(36).slice(2)
       url = "wss://connect.websocket.in/aakash9518?room_id="+ roomId.toString() 
       //+ roomId.toString()
       console.log(url)
        socket= new WebSocket(url)
        
        ////////
    } 
    componentDidMount(){
        

        ///// qr code reader
        const qrcode = require("qrcode-generator")
        let qr = qrcode(0,'L')
        qr.addData(url)
        qr.make()
        this.setState({
            qrImgComponent:qr.createImgTag(10,2)
        })
        ////////
        socket.onmessage = (dataevent)=>{
            console.log(dataevent)
        }
        

    }

   
    handleSendSomething= ()=>{
        console.log("works")
                let i=1
                const date = new Date().getSeconds()
                function f() {
                socket.send( new Date().getSeconds()- date);
                i++;
                if( i < 600 ){ 
                    setTimeout( f, 500);
                }
                }
                f()
    }
    handleUploadFile = event=>{
       this.setState({ selectedFile: event.target.files[0]})
       console.log(event.target.files[0])
    }

    handleSendFile= ()=>{
    let storage = Firebase.storage().ref().child(this.state.selectedFile.name)
    storage.put(this.state.selectedFile).then(e=>{
            
        console.log("uploaded file")
        socket.send(this.state.selectedFile.name)
        this.setState({UploadedText:"Sent"})
        //TODO: implement uploading bar
        })    
            }

    
    

    render(){
    return(
        <div>
            <Button  onClick={this.handleSendSomething}> send something</Button>
            <JsxParser jsx={this.state.qrImgComponent}/>
            <input type="file" name="file" onChange={this.handleUploadFile}/>
            <Button onClick={this.handleSendFile}>SendFile</Button>
            <h5>{this.state.UploadedText}</h5>
            
        </div>
    )
    }

}

export default Host