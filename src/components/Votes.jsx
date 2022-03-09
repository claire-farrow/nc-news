import * as api from "../api";
import {useState} from "react";

export default function Votes ({votes, article_id}) {
    const [voteUpdate, setVoteUpdate] = useState(0);

    const handleClick = (voteUpdate) => {
        setVoteUpdate((currentVotes) => currentVotes + voteUpdate);
        api.patchArticleWithVotes(article_id, voteUpdate).catch(() => {
            setVoteUpdate((currentVotes) => currentVotes - voteUpdate)
        })
    }

    return (
        <section>
            <p>Votes: {votes + voteUpdate}</p>
            <button disabled={voteUpdate === 1} onClick={() => handleClick(1)}>+</button>
            <button disabled={voteUpdate === -1} onClick={() => handleClick(-1)}>-</button>
        </section>
    )
}