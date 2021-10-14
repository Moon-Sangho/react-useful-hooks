import styled from '@emotion/styled';

const Home = () => {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 28px;
  margin-top: 20px;
`;
