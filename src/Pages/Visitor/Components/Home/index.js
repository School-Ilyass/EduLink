import './index.css'

import Logo from '../../../../Assets/Logo/Big.svg'

function Home(){
    return(
        <div id="Home" className="Home">
            <div>
                <img src={Logo} />
                <div><a href="/Signup">Get Started</a></div>
            </div>
            
            
        </div>
    )
}

export default Home