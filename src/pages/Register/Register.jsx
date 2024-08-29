import './Register.css'
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register </span>
            <form className="registerForm">
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="@email.com" />
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Pearls" />
                <label>Password</label>
                <input type="Password" className="registerInput" />
                <button className="registerButton">
                    <Link to="/login">Login</Link>
                    </button>
                <button className="register11Button">
                   Register
                    </button>
            </form>
        </div>
    )
}
