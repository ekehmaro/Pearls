import './header.css';
import myHeader from './myHeader.JPG';

export default function Header() {
    return (
        <>
            <div className="headerTitles">
                <span className="headerTitle1">
                    Pearl's Solution
                </span>
                <span className="headerTitle2"> Relationship <hr/>Therapist</span>
            </div>
            <img className="headerImage" src={myHeader} alt="description" />
        </>
    )
}
