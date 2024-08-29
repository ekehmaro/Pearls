import './sidebar.css'
import sidebarImage from './sidebarImage.JPG';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img className="sidebarImage" src={sidebarImage} alt="description" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat ad fuga consectetur et at. Officiis doloribus 
                    
                </p>
            </div>
            <div className="sidebarTitle">
            <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life </li>
                    <li className="sidebarListItem">Music </li>
                    <li className="sidebarListItem">Style </li>
                    <li className="sidebarListItem">Sport </li>
                    <li className="sidebarListItem">Hobbies </li>
                    <li className="sidebarListItem">Cinemas </li>
                </ul>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">
                    FOLLOW US
                </span> 
                <div className="sidebarSocial">
                <i className=" sidebarIcon fab fa-facebook-square"></i>
                <i className=" sidebarIcon fab fa-twitter-square"></i>
                <i className=" sidebarIcon fab fa-pinterest-square"></i>
                <i className=" sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
