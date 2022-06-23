
import Tweet from "./Tweet";


const TweetList = ({ name, tweets, setTweets }) => {
    return (
        <div className="container">
            {
                tweets.map((tweet) => <Tweet name={name} tweets={tweets} setTweets={setTweets} tweet={tweet} key={tweet.id} />)
            }
        </div>

    );
}

export default TweetList;