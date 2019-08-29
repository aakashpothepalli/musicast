import React from "react"
import SocketIOClient from "socket.io-client"
class Host extends React.Component{
    
    constructor(){
        super()
        this.state={
            data:""
        }
    } 
    componentDidMount(){ 
      const socket = SocketIOClient("http://127.0.0.1:4001")

      socket.on("recieve",data=>{
        this.setState({data:data.toString()})
        console.log(this.state.data)
      })

    }
    
    render(){
    return(
        <h2>host clicked {this.state.data}</h2>
    )
}
}

export default Host