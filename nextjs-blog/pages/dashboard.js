import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/dashboard");
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Following - {data.following}</h2>
      <h2>Followers - {data.followers}</h2>
    </div>
  );
}

export default Dashboard;
