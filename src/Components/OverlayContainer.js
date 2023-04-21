import styled from "styled-components/macro";

function OverlayContainer() {
  return (
    <Container>
      <h1>
        Skyrocket Your Hotel Bookings with Our Proven Marketing SYSTEMS - Get
        50+ Direct Bookings in 90 Days!
      </h1>
      <button>Unlock my booking boost now</button>
      <img src="images/Rectangle.png" />
    </Container>
  );
}

export default OverlayContainer;

const Container = styled.div`
  width: 79vw;
  height: 89vh;
  /* background-color: black; */
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  align-items: center;

  h1 {
    font-size: 4.6rem;
    text-align: center;
    margin: 30px;
    text-transform: uppercase;
  }

  button {
    width: 20vw;
    padding: 20px 30px;
    background-color: var(--blue);
    border-radius: 5px;
    color: white;
    font-size: 1.6rem;
    margin-top: 10px;
  }

  img {
    width: 100%;
    height: 60%;
    margin-top: 25px;
  }
`;
