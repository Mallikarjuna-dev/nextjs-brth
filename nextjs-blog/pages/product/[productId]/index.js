import { useRouter } from "next/router";

const productDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <h2>detail about product {productId}</h2>;
};

export default productDetail;
