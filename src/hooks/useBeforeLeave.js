import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []); //eslint-disable-line

  return <></>;
};

export default useBeforeLeave;
