import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//import CSS
import "./css/App.css";


//import components
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";


const App = () => {

  const name = "AL";
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);

  return (
    <div className="main-container">
      <div className="main-content">
        <CreateTweet textInput={textInput}
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets={setTweets}
        />
        <TweetList name={name} tweets={tweets} setTweets={setTweets} />
      </div>
    </div>
  )

}

export default App;