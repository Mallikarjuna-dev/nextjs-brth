import { comments } from "../../data/comments";

function Comment({ comment }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}
export default Comment;

export async function getStaticPaths() {
  return {
    paths: [{ params: { commentId: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find((c) => c.id === parseInt(commentId));

  return {
    props: {
      comment,
    },
  };
}
