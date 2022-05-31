import { Wrapper, WrapperCards } from "./Carousel.style";
import theme from "@/theme/theme";
import CardChicken from "@/components/molecule/Cards/CardChicken/CardChicken";
import CardPork from "@/components/molecule/Cards/CardPork/CardPork";
import CardSalmon from "@/components/molecule/Cards/CardSalmon/CardSalmon";
import CardButton from "@/components/molecule/Cards/CardButton/CardButton";

const Carousel = () => {
  return (
    <Wrapper theme={theme}>
      <WrapperCards>
        <CardChicken />
        <CardPork />
        <CardSalmon />
        <CardButton />
      </WrapperCards>
    </Wrapper>
  );
};

export default Carousel;
