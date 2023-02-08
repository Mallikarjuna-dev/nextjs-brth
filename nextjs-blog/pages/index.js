import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <p>Pre - rendering</p>
      <Link href="/users">User</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
};

export default Home;
