import React from "react"
import {Button} from "react-bootstrap"
import JsxParser from "react-jsx-parser"
import Firebase from "../firebase"
let socket = null
let url=""
class Host extends React.Component{
    
    constructor(){
        super()
        const roomId = Math.random().toString(36).slice(2)
        this.state={
            data:"hi there",
            qrImgComponent:null,
            selectedFile:null,
            UploadedText:"",
            roomID:roomId.toString(),
            isUploadComplete:false,
            UploadProgress:""
            
        }
         /////// creating new sockect room
       
       url = "wss://connect.websocket.in/aakash9518?room_id="+ roomId.toString() 
 
       console.log(url)
        socket= new WebSocket(url)
        console.log(new Date().getTime())
        ////////
    } 
    componentDidMount(){
        

        ///// qr code reader
        const qrcode = require("qrcode-generator")
        let qr = qrcode(0,'L')
        qr.addData(this.state.roomID)
        qr.make()
        this.setState({
            qrImgComponent:qr.createImgTag(10,2)
        })
        ////////
        
        

    }


    // handleUploadFile = event=>{
    //     if(event.target.files[0]===null)
    //     alert("select a mp3 file")
    //     else{
    //    this.setState({ selectedFile: event.target.files[0]})
    //    console.log(event.target.files[0])
    // }

    upload= (event)=>{
        if(event.target.files===undefined){
            alert("select a mp3 file")
        }
        else{
        let file =event.target.files[0]
        this.setState({UploadedText:"Uploading",selectedFile: file})

        let storage = Firebase.storage().ref().child(file.name.toString())

        storage.put(file).on('state_changed',snapshot=>{   
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({UploadProgress:progress})
            console.log('Upload is ' + progress + '% done');
            if(progress==100)
            this.setState({isUploadComplete:true,UploadedText:"Uploaded , Now click on start",UploadProgress:""})
            })
        
        }
    }

    start = ()=> {
        socket.send(this.state.selectedFile.name)
        setTimeout(this.setState({UploadedText:"Sent"}),2000)
    }
    render() {
    return(
        <div>
          
            <h3>Room id: {this.state.roomID}</h3>
            <JsxParser jsx={this.state.qrImgComponent}/>
            <input type="file" accept="audio/mp3" name="file" onChange={this.upload}/>
            <Button hidden = {this.state.isUploadComplete} onClick={this.upload}>Upload file</Button>
            <Button hidden = {!this.state.isUploadComplete} onClick={this.start}>Start</Button>
            <h5>{this.state.UploadedText} {this.state.UploadProgress}</h5>
            
        </div>
    )
    }


}


export default Host