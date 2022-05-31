import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.span`
  display: flex;
  margin: 16px 0 0;
  ${media.desktop} {
    margin: 45px 0 0;
  }
`;

export const Image = styled.img`
  ${({ theme }) => css`
    cursor: pointer;
    margin: 0 40px 0 0;
    width: auto;
    height: 20px;
  `}
`;
