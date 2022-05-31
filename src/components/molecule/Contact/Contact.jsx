import { Wrapper, Title, Anchor } from "./Contact.style";
import theme from "@/theme/theme";

const Contact = () => {
  return (
    <Wrapper>
      <Title theme={theme}>Contáctenos</Title>
      <Anchor theme={theme} href="#footer">
        Location
      </Anchor>
      <Anchor theme={theme} href="#footer">
        Telefono
      </Anchor>
    </Wrapper>
  );
};

export default Contact;
