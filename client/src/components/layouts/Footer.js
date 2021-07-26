import { Container } from "@material-ui/core";
import styled from "@emotion/styled";

const Footer = styled("footer")(({ theme }) => {
  return {
    background: theme.palette.primary.main,
    width: "100%",
    bottom: 0,
    left: 0,
    padding: 2,
    color: "#fff",
  };
});

const MainFooter = () => (
  <Footer>
    <Container sx={{ textAlign: "end", color: "GrayText" }}>
      Created by Farxmai in 2021
    </Container>
  </Footer>
);

export default MainFooter;
