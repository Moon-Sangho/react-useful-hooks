import React from "react";
import useInput from "../../hooks/useInput";

const UseInputComp = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <>
      <input type="text" placeholder="name" {...name} />
    </>
  );
};

export default UseInputComp;
