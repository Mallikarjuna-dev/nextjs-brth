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

export default withRouter(WebDev);
