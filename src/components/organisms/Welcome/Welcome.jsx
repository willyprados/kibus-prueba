import { Wrapper, WrapperButtons, Image } from "./Welcome.style";
import H1 from "@/components/atoms/Title/Title/H1/H1";
import H3 from "@/components/atoms/Title/Title/H3/H3";
import BtnPrimary from "@/components/atoms/Button/BtnPrimary/BtnPrimary";
import BtnSecundary from "@/components/atoms/Button/BtnSecundary/BtnSecundary";

const Welcome = () => {
  return (
    <Wrapper>
      <H1 />
      <H3 />
      <WrapperButtons>
        <BtnPrimary />
        <BtnSecundary />
      </WrapperButtons>
      <Image src="/assets/img/home_imagen.png" alt="Imagen decorativa" />
    </Wrapper>
  );
};

export default Welcome;
