import './index.css'
import Minimal from '../../../Assets/Logo/Minimal.svg'
function Header(props){
    if (props.Name) {
        return(
            <div className="Header animate__fadeInDown">
                <div className="Logo"><img src={Minimal} /></div>
                <div className="Links">
                    <a href='#'>Search</a>
                    <a href='#Article'>Articles</a>
                    <a href='#Journal'>Journals</a>
                    <a href='#Footer'>Links</a>
                </div>
                <div className="Actions">
                    <p>{props.Name}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="Header animate__fadeInDown">
            <div className="Logo"><img src={Minimal} /></div>
            <div className="Links">
                <a href='#Home'>Home</a>
                <a href='#About'>About</a>
                <a href='#Stats'>Stats</a>
                <a href='#'>Links</a>
            </div>
            <div className="Actions">
                <a href="/Authentification">Login</a>
            </div>
        </div>
    )
}

export default Header