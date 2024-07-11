import './index.css'
import {useState,useEffect} from "react"
import Logo from '../../../../Assets/Logo/Big.svg'

function Journal(){
    const [ArticleInfo , setArticleInfo] = useState()
    
    const [Journals , setJournals] = useState()


    useEffect(()=>{

        fetch("http://localhost:8000/Journal/GetALL")
        .then(res=> res.json())
        .then(res=> setJournals(res))
        .catch(e=>console.error(e))

    },[])


    

    return(
        <div className="Journal" id="Journal">
            <div className="JournalContainer">

                {Journals&&(
                    Journals.map((journal)=>(
                        <div className="Journal">
                            <img
                                src={journal.Image}
                            />
                            <div>
                                <h1>5</h1>
                                <p>Impact</p>
                            </div>
                            <div>
                                <h1>8</h1>
                                <p>Impact</p>
                            </div>

                            <div>
                                <a href="#">Editorial Board</a>
                                <a href={journal.Link}>See Journal</a>
                            </div>
                        </div>
                    )))
                }

                

                {/* <div>
                    <h1>Article</h1>
                </div> */}



            </div>
        </div>
    )
}

export default Journal