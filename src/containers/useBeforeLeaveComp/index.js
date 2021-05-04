import useBeforeLeave from "../../hooks/useBeforeLeave";

const UseBeforeLeaveComp = () => {
  const begForNotLeave = () => console.log("Pls dont leave");
  useBeforeLeave(begForNotLeave);
  return <div>hello</div>;
};

export default UseBeforeLeaveComp;
