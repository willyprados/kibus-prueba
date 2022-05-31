import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.span`
  display: block;
  margin: 35px 0;
  ${media.tablet} {
    padding: 0 20px 0 0;
  }
  ${media.desktop} {
    margin: 0;
    padding: 0 24px 0 0;
  }
`;

export const Image = styled.img``;

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

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin: 16px 0 0;
    ${media.desktop} {
      line-height: 24px;
    }
  `}
`;
