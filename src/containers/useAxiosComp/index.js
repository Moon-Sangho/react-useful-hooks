import { LIST_MOVIES_URL } from "../../constants";
import useAxios from "../../hooks/useAxios";

const UseAxiosComp = () => {
  const { loading, error, data, refetch } = useAxios({ url: LIST_MOVIES_URL });

  return (
    <>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading..." : error ? "Error" : null}</h2>
      <button onClick={refetch}>hello</button>
    </>
  );
};

export default UseAxiosComp;
