import Home from "./Components/Home"
import Header from "../CommunComponent/Header"
import Chat from "./Components/Chat"
import Article from "./Components/Article"
import SideBar from "../CommunComponent/SideBar"

import {useEffect} from "react"

function Editor(){

    document.querySelector("body").style.backgroundColor="rgb(5, 59, 20)"

    let Data
    try {
        
        Data = {
            "Name" : JSON.parse(sessionStorage.getItem('user')).user.name
            }

    } catch (error) {
        
        Data = {
            "Name" :"No Name"
            }
    }
    // console.log(JSON.parse(sessionStorage.getItem('user')).user.name)
    

    
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


        </>
    )
}

export default Editor