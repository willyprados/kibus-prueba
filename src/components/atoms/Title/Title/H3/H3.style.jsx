import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-family: ${theme.typography.caption.fontFamily};
    font-size: ${theme.typography.caption.fontSize.mobile}px;
    font-weight: 600;
    grid-column: 1 / 6;
    grid-row: 3 / 4;
    line-height: ${theme.typography.caption.lineHeight.mobile}px;
    width: 100%;
    height: fit-content;
    ${media.tablet} {
    }
    ${media.desktop} {
      grid-column: 1 / 7;
      grid-row: 3 / 4;
      font-size: ${theme.typography.caption.fontSize.desktop}px;
      line-height: ${theme.typography.caption.lineHeight.desktop}px;
    }
  `}
`;
