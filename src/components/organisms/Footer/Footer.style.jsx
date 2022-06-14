import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.darkBkg};
    padding: 24px 0;
    ${media.desktop} {
      padding: 60px 0;
    }
  `}
`;

export const WrapperContent = styled.div`
  display: grid;
  margin: 45px 0 100px;
  padding: 0 16px;
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.desktop} {
    grid-template-columns: 400px repeat(3, 1fr);
    margin: 0 auto;
    padding: 40px 0;
    width: 1280px;
  }
`;
