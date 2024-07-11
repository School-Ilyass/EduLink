import './index.css'
import {useState} from "react"
import Logo from '../../../../Assets/Logo/Big.svg'


import { useLocation, useNavigate } from 'react-router-dom';

function AddJournal(){
    const [ArticleInfo , setArticleInfo] = useState()
    
    let navigate = useNavigate();


    function GetJournalInfo(){
        
        const Journal = {
            "JournalID" : document.getElementById("JournalID").value,
            "Name" : document.getElementById("Name").value,
            "Link" : document.getElementById("Link").value,
            "Image" : document.getElementById("Image").value,
        }
        
        console.table(Journal)

        fetch('http://localhost:8000/Journal/Add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Journal),
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
                    <h1>Add New Journal</h1>
                </div>

                <div id="AddArticleContainerBody" className="AddArticleContainerBody">
                    <div>
                        <input id="JournalID" type="text" placeholder="JournalID"></input>
                        <input id="Name" type="text" placeholder="Name"></input>
                    </div>
                    <div>
                        <input id="Link" type="text" placeholder="Link"></input>
                        <input id="Image" type="text" placeholder="Image Link"></input>
                    </div>
                    <div>
                        <button type="submit" value="Add" onClick={GetJournalInfo} >Add</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default AddJournal