import Link from "next/link";

const PostList = ({ data }) => {
  return (
    <>
      <h2>Post lists</h2>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h3>
                {post.id} {post.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default PostList;
