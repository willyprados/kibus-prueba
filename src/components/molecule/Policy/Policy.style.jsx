import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
  ${media.tablet} {
    margin: 80px 0 0;
  }
  ${media.desktop} {
    margin: 45px 0 0;
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

export const Anchor = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin: 16px 0 0;
    text-decoration: none;
    &:hover {
      color: ${theme.colors.primary};
      transition: 0.6s;
    }
    ${media.desktop} {
      line-height: 24px;
    }
  `}
`;
