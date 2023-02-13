import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const handleCom = async () => {
    const res = await fetch("api/comments");
    const data = await res.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={handleCom}>Load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>{comment.text}</h2>
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
