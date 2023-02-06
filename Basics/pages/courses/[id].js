import { withRouter } from "next/router";

const maps = {
  "full-stack-dev": "full",
  "frontend-dev": "frontend",
};

const WebDev = (props) => {
  console.log(props);

  return (
    <>
      <p>{maps[props.router.query.id]} course </p>
    </>
  );
};

export const getStaticProps = async (context) => {
  console.log(context);
  return {
    props: {
      id: context.params.id, 
    },
    // notFound: false,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "full-stack-dev" },
      },
      {
        params: { id: "frontend-dev" },
      },
    ],
    fallback: false,
  };
};

export default withRouter(WebDev);
