import { useRouter } from "next/router";

const Post = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

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

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`page for /posts/${params.postId}`);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const data = await res.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [{ params: { postId: "1" } }],
    // paths,
    fallback: true,
  };
}
