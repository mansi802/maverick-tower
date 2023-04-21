import styled from "styled-components/macro";

function Header() {
  return (
    <Container>
      <Inner>
        <ImgDiv>
          <img src="images/Maverick.png" alt="Maverick" />
        </ImgDiv>
        <SecondDiv>
          <span>Home</span>
          <span>Our Services</span>
          <span>Case Studies</span>
          <span>Blog</span>
          <span>Contact</span>
          <button>Schedule a call</button>
        </SecondDiv>
      </Inner>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 11vh;
  /* background-color: black; */
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 2px solid black;
`;

const Inner = styled.div`
  width: 80vw;
  display: flex;
`;

const ImgDiv = styled.div`
  flex: 0.3;
`;

const SecondDiv = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer !important;
  }

  button {
    padding: 12px 30px;
    background-color: var(--blue);
    border-radius: 5px;
    color: white;
    font-size: 1.4rem;
  }
`;
