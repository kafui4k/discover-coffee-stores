import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const query = router.query;

  return <div>Dynamic Page</div>;
};

export default DynamicRoute;
