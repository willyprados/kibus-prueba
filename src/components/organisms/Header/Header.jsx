import { Wrapper } from "./Header.style";
import theme from "./../../../theme/theme";
import Logo from "./../../../components/atoms/Logo/Logo";

const Header = () => {
  return (
    <>
      <Wrapper theme={theme}>
        <Logo />
      </Wrapper>
    </>
  );
};

export default Header;
