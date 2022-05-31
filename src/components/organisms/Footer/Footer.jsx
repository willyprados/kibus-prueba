import { Wrapper, WrapperContent } from "./Footer.style";
import theme from "@/theme/theme";
import About from "@/components/molecule/About/About";
import Policy from "@/components/molecule/Policy/Policy";
import Contact from "@/components/molecule/Contact/Contact";
import Payment from "@/components/molecule/Payment/Payment";
import Social from "@/components/molecule/Social/Social";

const Footer = () => {
  return (
    <Wrapper theme={theme} id="footer">
      <WrapperContent>
        <About />
        <Policy />
        <Contact />
        <Social />
        <Payment />
      </WrapperContent>
    </Wrapper>
  );
};

export default Footer;
