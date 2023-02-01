import { useRouter } from "next/router";

const aboutPage = () => {
  const router = useRouter();

  return (
    <>
      <p>About Page</p>
      <button onClick={() => router.push("/")}>Goto Home</button>
    </>
  );
};

export default aboutPage;
