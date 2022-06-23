
import { v4 as uuidv4 } from "uuid";


const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {

    function textInputHandler(e) {
        setTextInput(e.target.value);
    }

    function sumbmitHandler(e) {
        e.preventDefault();
        setTweets([...tweets, { id: uuidv4(), message: textInput }]);
        setTextInput("");
    }

    return (
        <form onSubmit={sumbmitHandler}>
            <div className="input-group input-group-sm mb-3">
                <input className="form-control" type="text" onChange={textInputHandler} value={textInput} />
                <button className="btn btn-sm btn-success ">Submit</button>

            </div>
        </form >

    )
}

export default CreateTweet;