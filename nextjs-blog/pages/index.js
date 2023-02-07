import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <p>Pre - rendering</p>
      {/* <Link href="/blogs">Blog page</Link> */}
    </div>
  );
};

export default Home;
