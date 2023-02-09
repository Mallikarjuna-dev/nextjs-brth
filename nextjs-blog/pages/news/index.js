function NewsArticle({ data }) {
  return (
    <>
      <h2>List of News Article</h2>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <p>{el.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticle;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/news");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
