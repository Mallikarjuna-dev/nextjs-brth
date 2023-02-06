import { withRouter } from "next/router";

const aboutPage = (props) => {
  // const router = useRouter();
  console.log(props)

  return (
    <>
      <p>About Page</p>
      <button onClick={() => props.router.push("/")}>Goto Home</button>
    </>
  );
};

export default withRouter(aboutPage);
