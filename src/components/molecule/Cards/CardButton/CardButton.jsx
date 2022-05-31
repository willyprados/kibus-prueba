import { Wrapper, Image, Description } from "./CardButton.style";
import theme from "@/theme/theme";
import BtnCards from "@/components/atoms/Button/BtnCards/BtnCards";

const CardButton = () => {
  return (
    <Wrapper theme={theme}>
      <Image src="/assets/img/food_pollo.png" alt="Pollo" />
      <BtnCards />
      <Description>Ayúdanos a decidir nuestra nueva receta</Description>
    </Wrapper>
  );
};

export default CardButton;
