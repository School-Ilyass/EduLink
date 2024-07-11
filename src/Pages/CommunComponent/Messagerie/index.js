import './index.css'
import {useState , useEffect} from 'react'

function Messagerie(props){

    const [Messages , setMessages] = useState()
    
    
    useEffect(()=>{
        getMSG()
    },[])
    function getMSG(){
        fetch("http://localhost:8000/Message/Get", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.Name)
          })
        .then(res => res.json())
        .then(res => setMessages(res))
    }
    
    
    
    function getTime(){
        const currentTime = new Date();

        // Extract the hour, minute, and second from the Date object
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // Format the time as a string
        const timeString = `${hours}:${minutes}:${seconds}`;

        return timeString;
    }
    

    function sendMessage(){
        const message = document.getElementById("Message").value
        
        const data = {
            "EmmetteurID" : props.Name,
            "RecepteurID" : "General",
            "Conversation" : "General",
            "Time" : getTime(),
            "Contenu" : message,
        }

        console.table(data)

        fetch('http://localhost:8000/Message/Create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data => {
            // setArticle(data)
    
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
    }

    return(
        <div className="Messagerie">
            <div className="MessagerieConvs">
                <div className="MessagerieConvsGeneral"><i class="fa-regular fa-comments"></i></div>
                <div></div>
                <div></div>
            </div>
            <div className="MessagerieContent">

                <div className="MessagerieContentHolder">
                    {Messages&&(JSON.stringify(Messages))}
                </div>
                <div className="MessagerieContentInput">
                    <input type="text" placeholder="Message" id="Message"></input>
                    <button onClick={sendMessage}><i class="fa-regular fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Messagerie