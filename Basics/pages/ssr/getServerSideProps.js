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

export const getServerSideProps = async () => {
  return {
    props: {
      data: ["a", "b", "c", "d"],
    },
  };
};

export default Page;
