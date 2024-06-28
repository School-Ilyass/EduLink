import './index.css'

import Logo from '../../../../Assets/Logo/Big.svg'

function Home(){
    return(
        <div className="Home">
            <div>
                <img src={Logo} />
                <div><input type="text" placeholder="Search"></input></div>
            </div>
            
            
        </div>
    )
}

export default Home
