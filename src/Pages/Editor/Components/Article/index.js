    import './index.css'
    import { useState , useEffect } from "react"
    import Logo from '../../../../Assets/Logo/Big.svg'

    function Article(){
        // const [ArticleInfo , setArticleInfo] = useState()
        const [Article, setArticle] = useState()


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

        const user = {
            "id" : JSON.parse(sessionStorage.getItem('user')).user.id
        }


        useEffect(()=>{
            fetch('http://localhost:8000/Article/nAPP/Get')
            .then(response => response.json())
            .then(data => {
                setArticle(data)
                setArticleInfo(data)
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
        },[])


        function ApprouveArticle(ref){
            fetch('http://localhost:8000/Article/Approuve', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Ref: ref })
              })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // setArticleInfo(data)
                window.location.href = window.location.href;
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });

        }

        function DeleteArticle(ref){
            fetch('http://localhost:8000/Article/Delete', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Ref: ref })
              })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // setArticleInfo(data)
                window.location.href = window.location.href;
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });

        }
        




        function GetArticleInfo(id){
            
            const targetObject = Article.filter(item => item.Ref === id)[0];
            console.log(targetObject);
            // sessionStorage.setItem('Article' , targetObject)
            setArticleInfo(targetObject)

        }
        


        return(
            <div className="Article">
                <div className="ArticleContainer">
                    <div>
                        <h1>Article</h1>
                    </div>

                    <div className="ArticleContainerBody">
                        <div className="ShowMyArticles">
                            
                        {Array.isArray(Article) && Article.map((article) => (
                            <div>
                                <img 
                                    src={article.Image} 
                                    onClick={()=>{GetArticleInfo(article.Ref)}}
                                />
                            </div>
                        ))}
                        </div>
                        <div className="ShowMyArticlesInfos">
                        {
                            ArticleInfo &&(
                                <div className="ArticleInfoContainer">
                                    <p className="ArticleRef ArticleInfo">Ref : {ArticleInfo.Ref}</p>
                                    <p className="ArticleTheme ArticleInfo">Theme : {ArticleInfo.Theme}</p>
                                    <p className="ArticleJournal ArticleInfo">Journal : {ArticleInfo.JournalID}</p>
                                    <p className="ArticleName ArticleInfo">Name : {ArticleInfo.Name}</p>
                                    {/* <p className="ArticleStatus ArticleInfo">Status : {ArticleInfo.Status}</p> */}
                                    <a className="ViewArticle" target="blank" href={ArticleInfo.Link}><i class="fa-solid fa-eye"></i> View</a>

                                    <a className="DeleteArticle" onClick={()=>{DeleteArticle(ArticleInfo.Ref)}} href='/Editor'><i class="fa-regular fa-trash-can"></i> Delete</a>

                                    <a className="ApprouveArticle" onClick={()=>{ApprouveArticle(ArticleInfo.Ref)}} href='/Editor'><i class="fa-solid fa-check"></i> Approuve</a>
                                </div>)
                        }
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    export default Article