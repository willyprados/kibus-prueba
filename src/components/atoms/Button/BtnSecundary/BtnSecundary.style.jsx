import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Anchor = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.primary};
    font-weight: 600;
    width: 100%;
    text-align: center;
    border-radius: 100px;
    padding: 15px;
    color: ${theme.colors.primary};
    margin: 0 0 16px;
    text-decoration: none;
    svg {
      border: 1px solid ${theme.colors.primary};
      padding: 5px;
      width: 10px;
      height: 10px;
      border-radius: 20px;
      margin: 0 0 0 16px;
    }
    :hover {
      border: 1px solid ${theme.colors.gray};
      color: ${theme.colors.gray};
      svg {
        border: 1px solid ${theme.colors.gray};
        transition: 0.6s;
      }
      filter: contrast(200%);
    }
    ${media.tablet} {
      width: 90%;
    }
    ${media.desktop} {
      justify-content: space-around;
      margin: 0;
      width: 55%;
      svg {
        margin: 0;
      }
    }
  `}
`;
