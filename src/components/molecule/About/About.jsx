import { Wrapper, Image, Title, Paragraph } from "./About.style";
import theme from "@/theme/theme";

const About = () => {
  return (
    <Wrapper theme={theme}>
      <Image src="/assets/img/logo_minimal.png" alt="Logo" />
      <Title theme={theme}>Sobre KIBUS</Title>
      <Paragraph theme={theme}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </Paragraph>
    </Wrapper>
  );
};

export default About;
