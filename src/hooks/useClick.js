import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        // issue ref : https://github.com/facebook/react/issues/15841
        element.current.removeEventListener("click", onClick); // eslint-disable-line
      }
    };
  }, [onClick]);

  return element;
};

export default useClick;
