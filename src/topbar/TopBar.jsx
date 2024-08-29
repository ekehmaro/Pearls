import "./topbar.css";
import { Link } from "react-router-dom";
import myImage from './myImage.JPG';


export default function topBar() {
    const user = true;
    return (
        
        <div className="top">
            <div className="topLeft">
                <i className=" topIcon fab fa-facebook-square"></i>
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className=" topIcon fab fa-pinterest-square"></i>
                <i className=" topIcon fab fa-instagram-square"></i>
            </div>

            <div className="topCenter">

            <ul className="topList">
                  <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/about">ABOUT</Link>
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/contact">CONTACT</Link>
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                  </li>
                  <li className="topListItem">
                    {user && <Link className="link" to="/logout">LOGOUT</Link>}
                  </li>
              </ul>
            </div>

            <div className="topRight">
                {
                    user ?(
                        <img className="topImage" src={myImage} alt="description" />
                   ):
                   <ul className="topList"> 
                   <li className="topListItem" > <Link className="link" to="/login">LOGIN</Link> </li>
                   <li className="topListItem" >   <Link className="link" to="/register">REGISTER</Link> </li>
                   </ul>
                }
            
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
