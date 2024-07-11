import './index.css'
import {useState} from "react"


import Logo from '../../../../Assets/Logo/Big.svg'

function Home(){

    const [EduLinkArticles, setEduLinkArticles] = useState("");

    

    function handleChange(e) {

        (e.target.value === "") ? document.querySelector(".SearchResult").style.display = "none" : document.querySelector(".SearchResult").style.display = "block";

        fetch(`http://localhost:8000/Article/Get/${e.target.value}`)
        .then(res => res.json())
        .then(res => setEduLinkArticles(res))

    }



    return(
        <>
            <div className="Home animate__fadeIn">
                <div>
                    <img src={Logo} />
                    <div><input type="text" placeholder="Search" onChange={handleChange}></input></div>

                </div>

                
                
            </div>

            <section className="SearchResult">
                {
                    EduLinkArticles&&
                    (
                        
                        <div className="EduLinkArticles">
                                <h1> EduLink </h1>
                                <div>
                                    <p>Image</p>
                                    <p>Name</p>
                                    <p>Theme</p>
                                    <p>Actions</p>
                                </div>
                            {EduLinkArticles.map((article)=>(
                                <div>
                                    <p><img src={article.Image} /></p>
                                    <p>{article.Name}</p>
                                    <p>{article.Theme}</p>
                                    <a href={article.Link}><i class="fa-solid fa-eye"></i></a>
                                </div>
                            ))}
                        </div>
                    )
                }
            </section>
        </>
    )
}


export default Home
