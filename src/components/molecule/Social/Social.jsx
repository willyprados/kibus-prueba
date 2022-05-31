import { Wrapper, Image } from "./Social.style";
import theme from "@/theme/theme";

const Social = () => {
  return (
    <Wrapper theme={theme}>
      <Image src="/assets/img/fb.svg" alt="Facebook" />
      <Image src="/assets/img/ig.svg" alt="Instagram" />
      <Image src="/assets/img/yt.svg" alt="YouTube" />
    </Wrapper>
  );
};

export default Social;
