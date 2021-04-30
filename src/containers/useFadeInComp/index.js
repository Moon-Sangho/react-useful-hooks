import useFadeIn from "../../hooks/useFadeIn";

const UseFadeInComp = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  return (
    <>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem blabla</p>
    </>
  );
};

export default UseFadeInComp;
