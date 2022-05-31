import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.span`
  display: block;
  margin: 40px 0;
  ${media.tablet} {
    margin: 70px 0 0 0;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  ${media.desktop} {
    margin: 45px 0 0;
    grid-column: auto;
    grid-row: auto;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    ${media.desktop} {
      font-size: 22px;
      line-height: 28px;
    }
  `}
`;

export const WrapperImage = styled.div`
  display: flex;
  margin: 16px 0 0;
  ${media.desktop} {
  }
`;

export const Image = styled.img`
  margin: 0 16px 0 0;
  ${media.desktop} {
  }
`;
