import Home from "./Components/Home"
import Header from "../CommunComponent/Header"
import Chat from "./Components/Chat"
import Article from "./Components/Article"
import Journal from "./Components/Journal"
import SideBar from "../CommunComponent/SideBar"
import Messagerie from "../CommunComponent/Messagerie"
import Footer from "./Components/Footer"

import {useEffect} from "react"

function Scientific(){

    
    document.querySelector("body").style.backgroundColor="rgb(10, 69, 74)"

    let Data
    try {
        
        Data = {
            "Name" : JSON.parse(sessionStorage.getItem('user')).user.name    || "No Name",
            "ID" : JSON.parse(sessionStorage.getItem('user')).user.id ,
                }

    } catch (error) {
        
        Data = {
            "Name" :"No Name"
        }
    }
    // console.log(JSON.parse(sessionStorage.getItem('user')).user.name)
    
    // console.table(JSON.parse(sessionStorage.getItem('user')))
    
    return(
        <>
        
            {/* Home */}
            <div className="HeaderContainer">
                <Header
                    Name = {Data.Name}
                />
            </div>

            <SideBar/>

            {/* Home */}
            <Home/>
            
            {/* Article*/}
            <Article/>
            
            {/* Messagerie */}
            <Messagerie
                Name = {Data.ID}
            />

            {/* Journal */}
            <Journal/>

            <Footer/>

        </>
    )
}

export default Scientific