
import "./index.css"

function Footer(){
    return(
        <div className="Footer" id="Footer" >
            <div className="FooterContainer">
                <div>
                    <h1>Useful links</h1>
                    <a href="#">Submit your paper</a>
                    <a href="#">See Journals</a>
                    <a href="#">Search for articles</a>
                </div>
                <div className="Border">
                    <h1>Support</h1>
                    <a href="#">Contact admin</a>
                    <a href="#">Forum</a>
                </div>
                <div className="Border">
                    <h1>About</h1>
                    <a href="#">About EduLink</a>
                </div>
            </div>
            <div className="FooterBottom">
                <p>Copyright © 2024 EduLink</p>
            </div>
        </div>
    )
}

export default Footer