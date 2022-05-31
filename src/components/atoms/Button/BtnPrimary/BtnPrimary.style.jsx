import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Anchor = styled.a`
  ${({ theme }) => css`
    align-self: center;
    background-color: ${theme.colors.primary};
    display: block;
    font-weight: 600;
    width: 100%;
    text-align: center;
    border-radius: 100px;
    padding: 15px;
    color: ${theme.colors.white};
    margin: 0 0 16px;
    text-decoration: none;
    :hover {
      filter: opacity(85%);
      transition: 0.6s;
    }
    ${media.tablet} {
      width: 90%;
    }
    ${media.desktop} {
      margin: 0;
      width: 40%;
    }
  `}
`;
