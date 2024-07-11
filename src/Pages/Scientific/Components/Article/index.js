import './index.css'
import { useState , useEffect } from "react"
import Logo from '../../../../Assets/Logo/Big.svg'

function Article(){
    // const [ArticleInfo , setArticle] = useState()
    const [ArticleInfo , setArticleInfo] = useState(
        {
            "Ref" : "",
            "Name" : "",
            "Link" : "",
            "Image" : "",
            "Theme" : "",
            "JournalID" : "",
            "Theme" : "",
            "PersonID" : "",
            "Status" : "",
        }
    )
    const [Article, setArticle] = useState()

    const user = {
        "id" : JSON.parse(sessionStorage.getItem('user')).user.id
    }


    useEffect(()=>{
        fetch('http://localhost:8000/Article/Get', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(response => response.json())
          .then(data => {
            setArticle(data)
    
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });

          
    },[])

    function GetArticleInfo(id){

        const targetObject = Article.filter(item => item.Ref === id)[0];
        console.log(targetObject);
        // sessionStorage.setItem('Article' , targetObject)
        setArticleInfo(targetObject)
        // alert(targetObject)

    }
    


    return(
        <div className="Article" id="Article">
            <div className="ArticleContainer">
                <div>
                    <h1>Article</h1>
                </div>

                <div className="ArticleContainerBody">
                    <div className="ShowMyArticles">
                        
                        {Article&&(
                            Article.map((article)=>(
                                // <a href="#">{article.Ref}</a>
                                <div>
                                        <img 
                                            onClick={()=>{GetArticleInfo(article.Ref)}}
                                            src={article.Image}
                                        /> 
                                </div>
                                )))
                                
                        }

                    </div>
                    <div className="ShowMyArticlesInfos">

                        {
                        ArticleInfo &&(
                            <div className="ArticleInfoContainer">
                                <p className="ArticleRef ArticleInfo">Ref : {ArticleInfo.Ref}</p>
                                <p className="ArticleTheme ArticleInfo">Theme : {ArticleInfo.Theme}</p>
                                <p className="ArticleJournal ArticleInfo">Journal : {ArticleInfo.JournalID}</p>
                                <p className="ArticleName ArticleInfo">Name : {ArticleInfo.Name}</p>
                                <p className="ArticleStatus ArticleInfo">Status : {ArticleInfo.Status}</p>
                                <a href={ArticleInfo.Link}>View</a>
                            </div>)
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Article