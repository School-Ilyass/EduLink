import "./index.css"

import {useEffect , useState} from "react"

import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard(){

    let navigate = useNavigate();
   

    const [Users , setUsers] = useState()
    const [Journals , setJournals] = useState()

    useEffect(()=>{

        fetch("http://localhost:8000/Chercheur/GetAll")
        .then(res=> res.json())
        .then(res=> setUsers(res))
        .catch(e=>console.error(e))

        fetch("http://localhost:8000/Journal/GetALL")
        .then(res=> res.json())
        .then(res=> setJournals(res))
        .catch(e=>console.error(e))

    },[])

    function RenderUser(){
        // alert("hllo")
        document.querySelector(".Journals").style.display="none"
        document.querySelector(".Users").style.display="block"
    }

    function RenderJournal(){
        // alert("hllo")
        document.querySelector(".Journals").style.display="block"
        document.querySelector(".Users").style.display="none"
    }

    return(
        <div className="Dashboard">
            <div className="DashboardTitle"><h1>Dashboard</h1></div>
            <div className="DashboardContainer">
                <div className="DashboardContainerSelector">
                    <div className="DashboardContainerSelectorUsers" onClick={RenderUser}><p>Users</p></div>
                    <div className="DashboardContainerSelectorJournals" onClick={RenderJournal}><p>Journals</p></div>
                </div>

                <div className="DashboardContainerUsers Users">
                    <div className="DashboardContainerUsersContent">
                        <p>Name</p>
                        <p>Email</p>
                        <p>University</p>
                        <p>Actions</p>
                    </div>


                    {
                        Users && (
                            Users.map((user)=>(
                                <div className="DashboardContainerUsersContent">
                                    <p>{user.Name}</p>
                                    <p>{user.Email}</p>
                                    <p>{user.Universite}</p>
                                    <p><a href={"http://localhost:8000/User/Delete/" + user.ID}><i class="fa-regular fa-trash-can"></i></a></p>
                                </div>
                            ))
                        )
                    }
                    
                </div>

                <div className="DashboardContainerUsers Journals">
                    <div className="DashboardContainerUsersContent">
                        <p>Name</p>
                        <p>Link</p>
                        <p>Image</p>
                        <p>Actions</p>
                    </div>


                    {
                        Journals && (
                            Journals.map((journal)=>(
                                <div className="DashboardContainerUsersContent">
                                   
                                    <p>{journal.Name}</p>
                                    <p>{journal.Link}</p>
                                    <p><img src={journal.Image}></img></p>
                                    <p><a onClick={()=>{navigate('/Admin')}} href={"http://localhost:8000/User/Delete/" + journal.JournalID}><i class="fa-regular fa-trash-can"></i></a></p>
                                </div>
                            ))
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard