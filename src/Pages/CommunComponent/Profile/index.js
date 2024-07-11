import "./index.css"

import { useState , useEffect } from 'react'

function Profile(){
    const [user , setUser] = useState()
    // const user = JSON.parse().user
    useEffect(()=>{
        setUser(JSON.parse(sessionStorage.getItem('user')).user)
        console.log(JSON.parse(sessionStorage.getItem('user')).user)
    },[])
    return(
        <div className="Profile">
            {/* {JSON.stringify(user)} */}
            <div className="ProfileLeft"><i class="fa-regular fa-circle-user"></i></div>
            
            {user && (
                <div className="ProfileRight">
                    <div>
                        <p>ID : {user.id}</p>
                    </div>
                    <div>
                        <p>Email : {user.email} </p>
                    </div>
                    <div>
                        <p> Name : {user.name} </p>
                    </div>
                    <div>
                        <a href="/">Logout</a>
                    </div>
                    {/* <div>
                        <a>Logout</a>
                    </div> */}
                    <div></div>
                </div>
            )}


        </div>
    )
}

export default Profile