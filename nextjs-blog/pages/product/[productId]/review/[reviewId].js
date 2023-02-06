import { useRouter } from "next/router";

function review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  console.log(router.query);
  return (
    <h1>
      Review {reviewId} Product {productId}{" "}
    </h1>
  );
}

export default review;
