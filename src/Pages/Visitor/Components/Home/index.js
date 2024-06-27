import './index.css'

import Logo from '../../../../Assets/Logo/Big.svg'

function Home(){
    return(
        <div className="Home">
            <div>
                <img src={Logo} />
                <a href="#">Get Started</a>
            </div>
            
            
        </div>
    )
}

export default Home