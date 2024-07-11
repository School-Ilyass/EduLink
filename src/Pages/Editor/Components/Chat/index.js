import './index.css'

import Logo from '../../../../Assets/Logo/Big.svg'

function Chat(){
    return(
        <div className="Chat">
            <div className="ChatContainer">
                <div><h1>Chat</h1></div>

                <div className="ChatContainerHeader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="ChatContainerBody">
                    <div className="ChatContainerBodyMessages">
                    </div>

                    <div className="ChatContainerBodyMessagesInput">
                        <input type="text"></input>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat