import styled from "styled-components/macro";
import OverlayContainer from "./Components/OverlayContainer";
import Header from "./Components/Header";

function App() {
  return (
    <Main>
      <Header />
      <Container>
        <WhiteDiv></WhiteDiv>
        <BlueDiv></BlueDiv>
      </Container>
      <OverlayContainer />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100vw;
  height: 109vh;
  position: relative;
`;

const WhiteDiv = styled.div`
  width: 100vw;
  height: 69vh;
  background-color: white;
`;

const BlueDiv = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: var(--blue);
  overflow-y: hidden;
`;
