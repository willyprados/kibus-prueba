import { Wrapper, Title, WrapperImage, Image } from "./Payment.style";
import theme from "@/theme/theme";

const About = () => {
  return (
    <Wrapper theme={theme}>
      <Title theme={theme}>Métodos de pago</Title>
      <WrapperImage>
        <Image src="/assets/img/mastercard.svg" alt="Mastercard" />
        <Image src="/assets/img/visa.svg" alt="Visa" />
        <Image src="/assets/img/apple_pay.svg" alt="Apple Pay" />
        <Image src="/assets/img/google_pay.svg" alt="Google Pay" />
      </WrapperImage>
    </Wrapper>
  );
};

export default About;
