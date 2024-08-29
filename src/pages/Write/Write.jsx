import './Write.css'
import writeImage from "./writeImage.jpg";
export default function Write() {
    return (

        <div className="write">
             <img className="writeImage" src={writeImage} alt="description" />
           

            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"> </i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} /> 
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="WriteInput11">

                    </textarea>
                </div>
                <button className="writeSubmit">
                    upload
                </button>
            </form>
        </div>
    )
}
