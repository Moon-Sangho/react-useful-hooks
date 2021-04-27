import React from "react";
import useTitle from "../../hooks/useTitle";

const UseTitleComp = () => {
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 3000);
  return <div>see the web-page's title. it will change the title.</div>;
};

export default UseTitleComp;
