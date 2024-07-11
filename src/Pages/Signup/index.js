import "./index.css"
import minimal from "../../Assets/Logo/Minimal.svg"
import AuthLogo from "../../Assets/Logo/AuthLogo.svg"

import bcrypt from 'bcryptjs'

import {useState} from "react"

function Signup(){

    const [ Error , setError] = useState()

    const salt = bcrypt.genSaltSync(10)

    function getUserCred() {
        const User = {
            "Name": document.getElementById("FirstName").value + " " + document.getElementById("LastName").value,
            "Universite": document.getElementById("Universite").value,
            "Fonction": document.getElementById("Fonction").value,
            "Email": document.getElementById("Email").value,
            "Password": (document.getElementById("Password").value === document.getElementById("ConfirmPassword").value) ? bcrypt.hashSync(document.getElementById("Password").value, '$2a$10$CwTycUXWue0Thq9StjUM0u') : setError("Password Not matching !!"),
        };
    
        console.table(User)
      
        fetch('http://localhost:8000/Chercheur/Add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(User),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(data.message);
            if (data.message == "Email is already used"){
                navigate("/Authentification")
            }
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
      }


    
    
      return (
        <div>
            <div className="AuthBody">
                <div className="AuthLeft"><img src={AuthLogo}/></div>
                <div className="AuthRight">
                    <div className="AuthRightTitle"><h1>Signup</h1></div>
                    <div className="AuthRightName">
                        <input id="FirstName" type="text" placeholder="FirstName"></input>
                        <input id="LastName" type="text" placeholder="LastName"></input>
                    </div>

                    <div className="AuthRightCred">
                        <input id="Universite" type="text" placeholder="Universite"></input>
                        <input id="Fonction" type="text" placeholder="Fonction a l'universite"></input>
                    </div>

                    <div className="AuthRightCred">
                        <input id="Email" type="text" placeholder="Email"></input>
                        <input id="Password" type="password" placeholder="Password"></input>
                    </div>

                    <div className="AuthRightLast">
                        <input id="ConfirmPassword" type="password" placeholder="Confirm Password"></input>
                    </div>
                    <p>{Error}</p>
                    <div className="AuthRightSubmit">
                        <input type="submit" value="Signup" onClick={getUserCred}></input>
                    </div>
                    
                </div>
            </div>
            <div className="AuthFooter"><img src={minimal}/></div>
        </div>
    )
}

export default Signup