import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.typography.h1.fontFamily};
    font-size: ${theme.typography.h1.fontSize.mobile}px;
    font-weight: 700;
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    margin: 32px 0 0;
    line-height: ${theme.typography.h1.lineHeight.mobile}px;
    align-self: end;
    &::after {
      content: ".";
      color: ${theme.colors.primary};
    }
    ${media.tablet} {
    }
    ${media.desktop} {
      grid-column: 1 / 7;
      grid-row: 1 / 3;
      margin: 0;
      font-size: ${theme.typography.h1.fontSize.desktop}px;
      line-height: ${theme.typography.h1.lineHeight.desktop}px;
    }
  `}
`;
