import useClick from "../../hooks/useClick";

const UseClickComp = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return <h1 ref={title}>hello</h1>;
};

export default UseClickComp;
