import styled from "styled-components";

const Header = styled.header`
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 0 5rem 0 5rem;
`;

const Footer = styled.footer`
  margin-top: auto;
  color: gray;
`;

function SayHello(prop) {
  return (
      <>
        <Header>
          <h1>Hello, there is Vite+React</h1>
        </Header>
        <Footer>
          <h3>This Space is made by {prop.name}</h3>
        </Footer>
      </>
  );
}

export default SayHello;
