import { Wrapper, Title, Anchor } from "./Policy.style";
import theme from "@/theme/theme";

const Policy = () => {
  return (
    <Wrapper>
      <Title theme={theme}>Políticas</Title>
      <Anchor theme={theme} href="#footer">
        Políticas de Privacidad
      </Anchor>
      <Anchor theme={theme} href="#footer">
        Condiciones de uso
      </Anchor>
      <Anchor theme={theme} href="#footer">
        Cookies
      </Anchor>
    </Wrapper>
  );
};

export default Policy;
