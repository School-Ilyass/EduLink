import './index.css'
// import Minimal from '../../../Assets/Logo/Minimal.svg'
function SideBar(props){
    return(
        <div className="SideBar">
            <div className="">
                <a href='/AddJournal'><i class="fa-regular fa-newspaper"></i></a>
            </div>
            <div className="">
                <a href='/AddEditor'><i class="fa-solid fa-plus"></i></a>
            </div>
            <div className="">
                <a href='#'><i class="fa-regular fa-circle-user"></i></a>
            </div>
            <div className="">
                <a href='/'><i class="fa-solid fa-door-open"></i></a>
            </div>
        </div>
    )

}

export default SideBar