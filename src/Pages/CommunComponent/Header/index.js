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
                <a href='#'>About</a>
                <a href='#'>Features</a>
                <a href='#'>Topics</a>
                <a href='#'>Context</a>
            </div>
            <div className="Actions">
                <a href="#">Login</a>
            </div>
        </div>
    )
}

export default Header