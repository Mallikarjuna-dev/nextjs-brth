import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCom = async () => {
    const res = await fetch("api/comments");
    const data = await res.json();
    setComments(data);
  };

  const handleSubmit = async () => {
    const res = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const handleComment = async (commentId) => {
    const res = await fetch(`api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    handleCom();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleSubmit}>Save Changes</button>

      <button onClick={handleCom}>Load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              {comment.id} {comment.text}
              <button onClick={() => handleComment(comment.id)}>Delete</button>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
