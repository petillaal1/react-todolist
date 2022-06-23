const Tweet = ({ name, tweets, setTweets, tweet }) => {

    function deleteHandler() {
        setTweets(
            tweets.filter((state) => state.id !== tweet.id)
        )
    }

    return (
        <>
            <div className="form-group d-grid gap-2">
                <label style={{ fontWeight: 'bold' }}>{name}</label>
                <textarea className="form-control" type="text" disabled value={tweet.message} ></textarea>
                <div>
                    <button onClick={deleteHandler} className="btn btn-sm btn-outline-danger btn-like-del">Delete</button>{' '}
                    <button className="btn btn-sm btn-outline-primary btn-like-del">Like</button>
                </div>

            </div>

        </>

    )

}

export default Tweet;