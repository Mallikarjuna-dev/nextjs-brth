function ByCategory({ data, params }) {
  return (
    <div>
      <h1>
        By Category <i>{params.category}</i>
      </h1>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h2>
              {el.id} {el.title}
            </h2>
            <p>
              {el.description} | {el.category}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:8080/news?category=${params.category}`
  );
  const data = await res.json();

  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(user, password);

  return {
    props: {
      data,
      params,
    },
  };
}
