import "./index.css"
import minimal from "../../Assets/Logo/Minimal.svg"
import AuthLogo from "../../Assets/Logo/AuthLogo.svg"

function Signup(){
    return (
        <div>
            <div className="AuthBody">
                <div className="AuthLeft"><img src={AuthLogo}/></div>
                <div className="AuthRight">
                    <div className="AuthRightTitle"><h1>Signup</h1></div>
                    <div className="AuthRightName">
                        <input name="FirstName" type="text" placeholder="FirstName"></input>
                        <input name="LastName" type="text" placeholder="LastName"></input>
                    </div>
                    <div className="AuthRightCred">
                        <input name="Email" type="text" placeholder="Email"></input>
                        <input name="Password" type="text" placeholder="Password"></input>
                    </div>
                    <div className="AuthRightLast">
                        <input name="Email" type="text" placeholder="Email"></input>
                        <input name="Password" type="text" placeholder="Password"></input>
                    </div>
                    <div className="AuthRightSubmit">
                        <input type="submit" value="Signup"></input>
                    </div>
                    
                </div>
            </div>
            <div className="AuthFooter"><img src={minimal}/></div>
        </div>
    )
}

export default Signup