import './index.css'
import {useState} from "react"
import Logo from '../../../../Assets/Logo/Big.svg'

import bcrypt from 'bcryptjs'

import { useLocation, useNavigate } from 'react-router-dom';

function AddEditor(){
    let navigate = useNavigate();


    function GetEditorInfo(){
        
        const Editor = {
            "Thematique" : document.getElementById("Thematique").value,
            "Name" : document.getElementById("Name").value,
            "Email" : document.getElementById("Email").value,
            "Password" : bcrypt.hashSync(document.getElementById("Password").value, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
        }
        
        console.table(Editor)

        fetch('http://localhost:8000/Editeur/Add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Editor),
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);

            navigate('/Admin');
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });

   
    }
    

    return(
        <div className="AddArticle">

            <div className="AddArticleContainer">
                <div>
                    <h1>Add New Editor</h1>
                </div>

                <div id="AddArticleContainerBody" className="AddArticleContainerBody">
                    <div>
                        <select id="Thematique">
                            <option selected>Theme</option>
                            <option>Health</option>
                            <option>Technology</option>
                            <option >Science</option>
                        </select>
                        <input id="Name" type="text" placeholder="Name"></input>
                    </div>
                    <div>
                        <input id="Email" type="text" placeholder="Email"></input>
                        <input id="Password" type="password" placeholder="Password"></input>
                    </div>
                    <div>
                        <button type="submit" value="Add" onClick={GetEditorInfo} >Add</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default AddEditor