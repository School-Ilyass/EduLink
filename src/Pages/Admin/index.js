import Home from "./Components/Home"
import Header from "../CommunComponent/Header"
import SideBar from "./Components/SideBar"
import Dashboard from "./Components/Dashboard"

import {useEffect} from "react"


function Admin(){

     
    document.querySelector("body").style.backgroundColor="rgb(43, 2, 28)"
    

    return(
        <>
        
            {/* Home */}
            <div className="HeaderContainer">
                <Header
                    Name = "Admin"
                />
            </div>

            <SideBar/>

            {/* Home */}
            <Home/>
            
            <Dashboard/>

        </>
    )
}

export default Admin