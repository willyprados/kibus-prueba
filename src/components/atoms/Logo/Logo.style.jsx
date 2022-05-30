import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.img`
  ${({ theme }) => css`
    width: 100%;
    grid-column: 1 / 2;
    ${media.tablet} {
      grid-column: 1 / 3;
    }
    ${media.desktop} {
      grid-column: 1 / 2;
    }
  `}
`;
