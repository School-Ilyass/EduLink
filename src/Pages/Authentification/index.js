import "./index.css"
import AuthLogo from "../../Assets/Logo/AuthLogo.svg"
import Minimal from "../../Assets/Logo/Minimal.svg"

function Authentification(){
    return (
        <div>
            <div className="AuthBody">
                <div className="AuthLeft"><img src={AuthLogo}/></div>
                <div className="AuthRight">
                    <div className="AuthRightTitle"><h1>Login</h1></div>
                    <div className="AuthRightName">
                        <input name="Email" type="text" placeholder="Email"></input>
                    </div>
                    
                    <div className="AuthRightName">
                        <input name="Password" type="text" placeholder="Password"></input>
                    </div>
                    
                    <div className="AuthRightLostPWD">
                        <a href="#">Forgot your password ?</a>
                    </div>
                    <div className="AuthRightSubmit">
                        <input type="submit" value="Login"></input>
                    </div>


                    <div className="AuthRightSignup">
                        <a href="/Signup">Signup</a>
                    </div>
                    
                </div>
            </div>
            <div className="AuthFooter"><img src={Minimal}/></div>
        </div>
    )
}

export default Authentification