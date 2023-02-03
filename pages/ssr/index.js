import Link from "next/link";

const Page = () => (
  <>
    <Link href={"/ssr/getInitialProps"}>Goto /getInitialProps page</Link>
    <br />
    <Link href={"/ssr/getServerSideProps"}>Goto /getServerSideProps page</Link>
  </>
);

export default Page;
