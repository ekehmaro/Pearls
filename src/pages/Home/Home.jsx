import './home.css';
import Header from "../../Header/Header.jsx";
import Post from '../../Post/Post.jsx';
import Sidebar from '../../sidebar/Sidebar.jsx';

export default function Home() {
    return (
     <>
      <Header />
     <div className="home">
            <Post />
            <Sidebar />
        </div>
        </>
    )
}
