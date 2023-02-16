import Footer from "@/components/Footer";

const about = () => {
  return <h2 className="content">About page</h2>;
};

export default about;

about.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
