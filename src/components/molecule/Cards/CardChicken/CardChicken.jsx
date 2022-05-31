import { Wrapper, Image, Title, Description } from "./CardChicken.style";
import theme from "@/theme/theme";

const CardChicken = () => {
  return (
    <Wrapper theme={theme}>
      <Image src="/assets/img/food_pollo.png" alt="Pollo" />
      <Title>Pollo</Title>
      <Description>Energética, con ingredientes antioxidantes</Description>
    </Wrapper>
  );
};

export default CardChicken;
