import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.span`
  ${({ theme }) => css`
    display: block;
    align-self: center;
    border-radius: 20px;
    width: 240px;
    color: ${theme.colors.gray};
    margin: 0 16px 0 0;
    ${media.desktop} {
      margin: 0;
      width: 235px;
      padding: 10px;
      &:hover {
        background-color: ${theme.colors.grayLight};
        /* background-color: ${theme.colors.primary}; */
        /* filter: opacity(25%); */
        transition: 0.6s;
      }
    }
  `}
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: ${theme.colors.secundary};
    text-align: center;
    ${media.desktop} {
      margin: 0;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    display: inline-block;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 16px 0;
    color: ${theme.colors.secundary};
    text-align: center;
    width: 100%;
    &:first-letter {
      text-transform: uppercase;
    }
    ${media.desktop} {
      margin: 24px 0;
    }
  `}
`;
