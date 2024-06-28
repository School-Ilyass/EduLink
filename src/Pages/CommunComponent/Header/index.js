import './index.css'
import Minimal from '../../../Assets/Logo/Minimal.svg'
function Header(props){
    if (props.Name) {
        return(
            <div className="Header">
                <div className="Logo"><img src={Minimal} /></div>
                <div className="Links">
                    <a href='#'>Search</a>
                    <a href='#'>Journal</a>
                    <a href='#'>Statistics</a>
                    <a href='#'>Context</a>
                </div>
                <div className="Actions">
                    <p>{props.Name}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="Header">
            <div className="Logo"><img src={Minimal} /></div>
            <div className="Links">
                <a href='#Home'>Home</a>
                <a href='#About'>About</a>
                <a href='#Stats'>Stats</a>
                <a href='#'>Link</a>
            </div>
            <div className="Actions">
                <a href="/Authentification">Login</a>
            </div>
        </div>
    )
}

export default Header