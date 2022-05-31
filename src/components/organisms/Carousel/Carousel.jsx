import { Wrapper } from "./Carousel.style";
import theme from "@/theme/theme";
import CardChicken from "@/components/molecule/Cards/CardChicken/CardChicken";
import CardPork from "@/components/molecule/Cards/CardPork/CardPork";
import CardSalmon from "@/components/molecule/Cards/CardSalmon/CardSalmon";
import CardButton from "@/components/molecule/Cards/CardButton/CardButton";

const Carousel = () => {
  return (
    <Wrapper theme={theme}>
      <CardChicken />
      <CardPork />
      <CardSalmon />
      <CardButton />
    </Wrapper>
  );
};

export default Carousel;
