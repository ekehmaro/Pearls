import "./singlePost.css";
import SinglePostImage from './SinglePostImage.JPG';

export default function singlePost() {
    return (
        <>
         
        <div className="singlePost">
        
        <div className="singlePostWrapper">
        
        <img className="SinglePostImage" src={SinglePostImage} alt="description" />
        
        <h1 className="singlePostTitle">
    Lorem ipsum dolor sit amet    
    <div className="singlePostEdit">
        <i className="singlePostIcon far fa-edit"> </i>
        <i className="singlePostIcon far fa-trash-alt"> </i>
    </div>
    </h1>
    <div className="singlePostInfo">
        <span className="singlePostAuthor">Author <b>Pearls</b></span>
        <span className="singlePostDate">1 hour ago</span>
    </div>
    <p className="singlePostInfoDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum 
        officiis facilis rerum reprehenderit neque tempore, nam culpa adipisci quos, 
        mollitia accusamus itaque suscipit, repellat praesentium minus facere 
        ea maiores quas!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum 
        officiis facilis rerum reprehenderit neque tempore, nam culpa adipisci quos, 
        mollitia accusamus itaque suscipit, repellat praesentium minus facere 
        ea maiores quas!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum 
        officiis facilis rerum reprehenderit neque tempore, nam culpa adipisci quos, 
        mollitia accusamus itaque suscipit, repellat praesentium minus facere 
        ea maiores quas!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum 
        officiis facilis rerum reprehenderit neque tempore, nam culpa adipisci quos, 
        mollitia accusamus itaque suscipit, repellat praesentium minus facere 
        ea maiores quas!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum 
        officiis facilis rerum reprehenderit neque tempore, nam culpa adipisci quos, 
        mollitia accusamus itaque suscipit, repellat praesentium minus facere 
        ea maiores quas!
    </p>
        </div>

        </div>
        </>
    )
}
