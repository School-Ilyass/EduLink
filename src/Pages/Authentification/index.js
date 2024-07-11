import "./index.css"
import AuthLogo from "../../Assets/Logo/AuthLogo.svg"
import Minimal from "../../Assets/Logo/Minimal.svg"
import bcrypt from 'bcryptjs'

import { useLocation, useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js'

function Authentification(){

  function showToast(message,color) {
    Toastify({
      text: message,
      duration: 3000,
      // destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: color
        // background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }

    document.querySelector("body").style.backgroundColor="rgb(32, 32, 32)"

    // Toastify("hello")
    const salt = bcrypt.genSaltSync(10)
    
    let navigate = useNavigate();
    
    function getUserCred(){

        const User = {
          "Email": document.getElementById("Email").value,
          "Password": bcrypt.hashSync(document.getElementById("Password").value, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
        };
    
        function CheckChercheur(){
          fetch('http://localhost:8000/Chercheur/Check', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(User),
          })
          .then(response => response.json())
          .then(data => {
            if(data.message === "Invalid email or password"){
              showToast("Invalid email or password","red")
              return 0
            }
            else{
              sessionStorage.setItem('user', JSON.stringify(data));
              navigate('/Scientific');
            }
          })
          .catch(error => {console.error(error)});
        }

        function CheckEditor(){
          fetch('http://localhost:8000/Editeur/Check', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(User),
          })
          .then(response => response.json())
          .then(data => {
            if(data.message === "Invalid email or password"){
              showToast("Invalid email or password","red")
              return 0
            }
            else{
              sessionStorage.setItem('user', JSON.stringify(data));
              navigate('/Editor');
            }
          })
          .catch(error => {console.error(error)});
          
        }

        if(User.Email == "Admin"){navigate('/Admin')}
        else{
          CheckChercheur()
          CheckEditor()
        }
    }




    return (
        <div>
            <div className="AuthBody">
                <div className="AuthLeft"><img src={AuthLogo}/></div>
                <div className="AuthRight">
                    <div className="AuthRightTitle"><h1>Login</h1></div>
                    <div className="AuthRightName">
                        <input id="Email" type="text" placeholder="Email"></input>
                    </div>
                    
                    <div className="AuthRightName">
                        <input id="Password" type="password" placeholder="Password"></input>
                    </div>
                    
                    <div className="AuthRightLostPWD">
                        <a href="#">Forgot your password ?</a>
                    </div>
                    <div className="AuthRightSubmit">
                        <input type="submit" value="Login" onClick={getUserCred}></input>
                    </div>


                    <div className="AuthRightSignup">
                        <a href="/Signup" >Signup</a>
                    </div>
                    
                </div>
            </div>
            <div className="AuthFooter"><img src={Minimal}/></div>
        </div>
    )

}

export default Authentification