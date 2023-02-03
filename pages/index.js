import Link from "next/link";

const getSomething = () => (
  <>
    <p>Hi, next.js</p>

    <Link href={"/about"}>About us</Link>
    <Link href={"/courses"}>Courses page</Link>
  </>
);

export default getSomething;
