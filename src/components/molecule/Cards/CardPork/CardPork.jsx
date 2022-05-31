import { Wrapper, Image, Title, Description } from "./CardPork.style";
import theme from "@/theme/theme";

const CardPork = () => {
  return (
    <Wrapper theme={theme}>
      <Image src="/assets/img/food_cerdo.png" alt="Cerdo" />
      <Title>Cerdo</Title>
      <Description>Ipoalergénica, con Omega 3 y 6</Description>
    </Wrapper>
  );
};

export default CardPork;
