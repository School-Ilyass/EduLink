import './index.css'

import { useState , useEffect} from 'react'

function Stats(){
    const [Stats, setStats] = useState()
    useEffect(()=>{
        fetch("http://localhost:8000/Stats/Get")
        .then(res => res.json())
        .then(res => setStats(res))
    },[])

    return(
        <div id="Stats" className="Stats" >
            <div className="StatsTitle">
                <h1> Statistics </h1>
            </div>


            {Stats&&(
                <div className="StatsText">
                    <div>
                        <h2>{Stats.Journals}</h2>
                        <p>Journals</p>
                    </div>
                    <div>
                        <h2>{Stats.Articles}</h2>
                        <p>Articles</p>
                    </div>
                    <div>
                        <h2>{Stats.Researchers}</h2>
                        <p>Researchers</p>
                    </div>
                    <div>
                        <h2>{Stats.Editors}</h2>
                        <p>Editors</p>
                    </div>
                </div>)
                }
            {/* <div className="StatsBTN">
                <a href="#"> See Journals </a>
            </div> */}
            
            
        </div>
    )
}

export default Stats