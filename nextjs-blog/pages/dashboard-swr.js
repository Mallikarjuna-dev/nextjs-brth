import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:8080/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "error accured";
  if (!data) return "loading...";

  return (
    <div>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Following - {data.following}</h2>
      <h2>Followers - {data.followers}</h2>
    </div>
  );
}

export default DashboardSWR;
