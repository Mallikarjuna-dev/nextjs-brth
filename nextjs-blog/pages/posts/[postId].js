const Post = ({ data }) => {
  return (
    <>
      <h2>
        {data.id} {data.title}
      </h2>
      <p>{data.body}</p>
    </>
  );
};

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    // paths: [
    //   {
    //     params: {
    //       postId: "98",
    //     },
    //   },
    // ],
    paths,
    fallback: false,
  };
}
