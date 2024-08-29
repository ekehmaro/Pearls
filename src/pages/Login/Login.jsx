import './Login.css'
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login </span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="@email.com" />
                
                <label>Password</label>
                <input type="Password" className="loginInput" />
                <button className="loginButton">Login</button>
                <button className="registerButton">
                 <Link to="/register">  Register </Link> 
                    </button>
            </form>
        </div>
    )
}
