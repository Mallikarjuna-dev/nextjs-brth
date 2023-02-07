import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <div>
      <h2>Home page</h2>
      <Link href="/blogs">Blog page</Link>
      <Link href="/product">Product page</Link>

      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default Home;
