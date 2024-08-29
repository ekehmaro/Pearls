import './Posts.css'
import postsImage from './postsImage.JPG';
import { Link } from "react-router-dom";

export default function Posts() {
    return (
        <div className="Posts">
             <img className="postsImage" src={postsImage} alt="description" />

             <div className="postsInfo">
                 <div className="postsCats">
                     <span className="postsCat"> Music </span>
                     <span className="postsCat"> Life</span>
                     <hr />
                     <span className="postsTitle">
                       <Link to="/singlePost" > Lorem ipsum dolor, sit amet consecte htyfvf </Link> 
                         <hr />
                     </span>
                     <span className="postsDate"> 1 hour ago </span>
                 </div>
                 <p className="postsDescription">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa placeat rem eum! Laborum vero accusamus maxime rem, 
                     non perspiciatis labore? Non optio, perferendis sit 
                     praesentium quia iusto? Maiores, nostrum in.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa placeat rem eum! Laborum vero accusamus maxime rem, 
                     non perspiciatis labore? Non optio, perferendis sit 
                     praesentium quia iusto? Maiores, nostrum in.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa placeat rem eum! Laborum vero accusamus maxime rem, 
                     non perspiciatis labore? Non optio, perferendis sit 
                     praesentium quia iusto? Maiores, nostrum in.
                 </p>
             </div>
        </div>
    )
}
