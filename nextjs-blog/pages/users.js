import React from "react";

const userList = ({ data }) => {
  return (
    <>
      <h2>List of users</h2>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log(data);

  return {
    props: { data },
  };
}
export default userList;
