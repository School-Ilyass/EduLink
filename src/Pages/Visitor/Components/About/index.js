import './index.css'
import medium from "../../../../Assets/Logo/Medium.svg"

function About(){
    return(
        <div className="About">
            <div className="AboutLogo">
                <img src={medium}/>
            </div>
            <div className="AboutText">
                <div>
                    <h1>Edulink</h1>
                    <h2>Ilyass Baba</h2>
                    <p>PaperX is a dedicated platform designed to empower researchers and scholars by providing a centralized hub for the sharing and discovery of scientific research papers. 
                    Built as a capstone project for your Third final year project, PaperX aims to streamline the dissemination of cutting-edge knowledge across various academic disciplines.</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default About