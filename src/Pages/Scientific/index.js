import Home from "./Components/Home"
import Header from "../CommunComponent/Header"
import Chat from "./Components/Chat"
import Article from "./Components/Article"
import Journal from "./Components/Journal"
import SideBar from "../CommunComponent/SideBar"

function Scientific(){

    const Data = {
        "Name" : "Ilyass Baba"
    }

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

            {/* Journal */}
            <Journal/>


        </>
    )
}

export default Scientific