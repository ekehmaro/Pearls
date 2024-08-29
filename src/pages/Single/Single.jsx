import './Single.css'
import Sidebar from '../../sidebar/Sidebar.jsx';
import SinglePost from "../../SinglePost/SinglePost.jsx";

export default function Single() {
    return (
        <div className="single">
          {/* post */}
          <SinglePost />
          <Sidebar />
        </div>
    )
}
