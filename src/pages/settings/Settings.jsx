import './Settings.css';
import Sidebar from '../../sidebar/Sidebar.jsx';
import settingsImage from './settingsImage.jpg';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update your account
                    </span>
                    
                    <span className="settingsDeleteTitle">
                        Delete your account
                    </span>

                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                        <img className="settingsImage" src={settingsImage} alt="description" />
                        <label htmlFor="fileInput"> <i className="settingsPPIcon far fa-user-circle"> </i></label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                        </div>
                        <label>Username</label>
                        <input type="text"  placeholder="Pearls" />
                        <label>email</label>
                        <input type="email"  placeholder="@gmail.com" />
                        <label>password</label>
                        <input type="password" />
                         <button className="settingsSubmit">Update</button>
                    </form>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}
