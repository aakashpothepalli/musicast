import React from "react"
import MainContent from "../Components/Main Content/MainContent"
import NavHeader from "../Components/Nav Header/NavHeader"

function Home()
{
    return(
        <div style={{width:"100%",height:"100%"}}>
        <NavHeader/>
        <MainContent/>
        </div>
    )
}
export  default Home
