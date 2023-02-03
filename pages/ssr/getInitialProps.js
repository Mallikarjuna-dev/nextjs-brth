const Page = (props) => {
  console.log(props);
  return (
    <>
      {props.data.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </>
  );
};

Page.getInitialProps = async () => {
  return {
    data: ["a", "b", "c", "d"],
  };
};

export default Page;
