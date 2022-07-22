import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.span`
  display: flex;
  margin: 16px 0 0;
  ${media.tablet} {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  ${media.desktop} {
    margin: 45px 0 0;
    grid-column: auto;
    grid-row: auto;
  }
`;

export const Anchor = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: start;
    margin: 0 40px 0 0;
    height: 20px;
    width: auto;
    ${media.desktop} {
      justify-content: center;
      border: 2px transparent solid;
      border-radius: 50px;
      padding: 8px;
      height: 40px;
      width: 40px;
      :hover {
        border: 2px solid ${theme.colors.primary};
        background-color: ${theme.colors.primary};
        cursor: pointer;
        transition: 0.6s;
      }
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    display: block;
    align-self: flex-start;
    ${media.desktop} {
      align-self: center;
    }
  `}
`;
