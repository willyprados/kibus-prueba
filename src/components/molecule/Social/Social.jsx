import { Wrapper, Anchor, Image } from "./Social.style";
import theme from "@/theme/theme";

const Social = () => {
  return (
    <Wrapper theme={theme}>
      <Anchor theme={theme}>
        <Image src="/assets/img/fb.svg" alt="Facebook" />
      </Anchor>
      <Anchor theme={theme}>
        <Image src="/assets/img/ig.svg" alt="Instagram" />
      </Anchor>
      <Anchor theme={theme}>
        <Image src="/assets/img/yt.svg" alt="YouTube" />
      </Anchor>
    </Wrapper>
  );
};

export default Social;
