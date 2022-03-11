import * as api from "../api";

export default function DeleteComment ({comment_id, author, comments, setComments}) {
 
   

    const handleDelete = (event) => {
        event.preventDefault()

    
        
        api.deleteCommentByCommentId(comment_id, author).then(() => {
            alert ("comment deleted")
            setComments((comments) => {
                return comments.filter((comment) => {
                    return comment.comment_id !== comment_id
                })
            })
        })
       
    }

    return (
            <button onClick={handleDelete}>Delete Comment</button>
    )

}