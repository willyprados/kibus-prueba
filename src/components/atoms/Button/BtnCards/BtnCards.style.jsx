import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Anchor = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d5dbe1;
    font-weight: 600;
    width: 80%;
    text-align: center;
    border-radius: 40px;
    padding: 10px;
    background-color: #d5dbe1;
    color: ${theme.colors.white};
    text-decoration: none;
    svg {
      width: 10px;
      height: 10px;
      margin: 0 0 0 10px;
    }
    :hover {
      filter: opacity(65%);
      transition: 0.6s;
    }
    ${media.desktop} {
      padding: 15px;
      margin: 0;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  `}
`;
