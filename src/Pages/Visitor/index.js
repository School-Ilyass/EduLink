import Home from "./Components/Home"
import Header from "../CommunComponent/Header"
import About from "./Components/About"
import Stats from "./Components/Stats"
import Footer from "./Components/Footer"

function Visitor(){
    return(
        <>


            {/* Home */}
            <div className="HeaderContainer"><Header/></div>
 
            {/* Home */}
            <Home
            
            />

            {/* About */}
            <About
            
            />
            
            {/* Stats */}
            <Stats
            
            />

            {/* Footer */}
            <Footer
            
            />

        </>
    )
}

export default Visitor