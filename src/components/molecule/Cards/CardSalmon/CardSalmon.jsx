import { Wrapper, Image, Title, Description } from "./CardSalmon.style";
import theme from "@/theme/theme";

const CardSalmon = () => {
  return (
    <Wrapper theme={theme}>
      <Image src="/assets/img/food_salmon.png" alt="Salmon" />
      <Title>Salmon</Title>
      <Description>Para dar vitalidad buena para el sistema inmune</Description>
    </Wrapper>
  );
};

export default CardSalmon;
