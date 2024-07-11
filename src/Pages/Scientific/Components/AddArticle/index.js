import './index.css'
import {useState,useEffect} from "react"
import Logo from '../../../../Assets/Logo/Big.svg'


import { useLocation, useNavigate } from 'react-router-dom';

function AddArticle(){
    const [ArticleInfo , setArticleInfo] = useState()
    const [Journals , setJournals] = useState()
    
    let navigate = useNavigate();

    const Data = {
        "Name" : JSON.parse(sessionStorage.getItem('user')).user.name || "No Name"
    }

    function GetArticleInfo(){
        
        const Article = {
            "Name" : document.getElementById("Name").value,
            "Link" : document.getElementById("Link").value,
            "Image" : document.getElementById("Image").value,
            "JournalID" :  document.getElementById("Journal").value,
            "Theme" : document.getElementById("Theme").value,
            "PersonID" :  JSON.parse(sessionStorage.getItem('user')).user.id,            
            "Status" : "NApproved",
        }
        
        // console.table(Article)

        fetch('http://localhost:8000/Article/Add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Article),
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);

            navigate('/Scientific');
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });

    }

    useEffect(()=>{

        fetch("http://localhost:8000/Journal/GetALL")
        .then(res=> res.json())
        .then(res=> setJournals(res))
        .catch(e=>console.error(e))

    },[])
    
    

    return(
        <div className="AddArticle">

            <div className="AddArticleContainer">
                <div>
                    <h1>Add New Article</h1>
                </div>

                <div id="AddArticleContainerBody" className="AddArticleContainerBody">
                    <div>
                        <input id="Name" type="text" placeholder="Name"></input>
                        <select id="Journal" >
                            <option selected>Journal</option>
                            {Journals&&(
                                Journals.map((journal)=>(
                                    <option value={journal.Name}>{journal.Name}</option>
                                ))
                                )
                            }
                        </select>
                    </div>
                    <div>
                        <input id="Image" type="text" placeholder="Image Link"></input>
                        <select id="Theme" >
                            <option selected>Theme</option>
                            <option value="1">Science</option>
                            <option value="2">Technology</option>
                            <option value="3">Health</option>
                        </select>
                    </div>
                    <div>
                        <input id="Link" type="text" placeholder="Link (Google drive | Dropbox | ... )"></input>
                    </div>
                    <div>
                        <button type="submit" value="Add" onClick={GetArticleInfo} >Add</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default AddArticle