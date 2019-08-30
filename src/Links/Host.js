import React from "react"



let Socket = require('simple-websocket') 
let socket = {}


class Host extends React.Component{
    
    constructor(){
        super()
        this.state={
            data:""  
        }
        socket= new Socket('wss://connect.websocket.in/aakash9518?room_id=1')
              
        socket.on("data",(data)=>{
            console.log(data.toString())
            this.setState({
                data:data.toString()
            })
        })
    } 

    componentDidMount(){

    }
    render(){
    return(
        <h2> {this.state.data}</h2>
    )
}
}

export default Host