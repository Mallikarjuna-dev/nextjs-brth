import Link from "next/link";

function productList() {
  return (
    <>
      <h2>
        <Link href="/product/1">product 1</Link>
      </h2>
      <h2>
        <Link href="/product/2">product 2</Link>
      </h2>
      <h2>
        <Link href="/product/3" replace>
          product 3
        </Link>
      </h2>
      <Link href="/">Go Home</Link>
    </>
  );
}

export default productList;
