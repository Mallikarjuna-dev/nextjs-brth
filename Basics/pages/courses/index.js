const Courses = (props) => {
  console.log(props);
  return (
    <>
      <p>Courses</p>
      <ol>
        {props.courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ol>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      courses: ["full stack", "frontend"],
    },
    // notFound: false,
  };
};

export default Courses;
