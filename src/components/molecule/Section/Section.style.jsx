import styled, { css } from "styled-components";
import { media } from "./../../../styles/mixins/media";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${theme.spacing.medium}px;
    margin: 16px 24px;
    ${media.tablet} {
      grid-template-columns: repeat(10, 1fr);
    }
    ${media.desktop} {
      margin: 16px auto;
      width: 1280px;
      grid-template-columns: repeat(12, 1fr);
    }
  `}
`;
