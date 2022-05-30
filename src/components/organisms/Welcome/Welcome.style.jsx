import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${theme.spacing.medium}px;
    margin: 16px 24px;
    ${media.tablet} {
      grid-template-columns: repeat(10, 1fr);
    }
    ${media.desktop} {
      margin: 70px auto 0;
      width: 1280px;
      grid-template-columns: repeat(12, 1fr);
    }
  `}
`;

export const WrapperButtons = styled.div`
  ${({ theme }) => css`
    grid-column: 1 / 6;
    grid-row: 4 / 5;
    display: block;
    margin: 32px 0 0;
    ${media.tablet} {
    }
    ${media.desktop} {
      display: flex;
      justify-content: space-between;
      grid-column: 1 / 5;
      grid-row: 4 / 4;
      margin: 35px 0 0;
    }
  `}
`;

export const Image = styled.img`
  width: 100%;
  grid-column: 1 / 6;
  grid-row: 1 / 2;
  justify-self: end;
  ${media.tablet} {
    grid-column: 6 / 13;
    grid-row: 1 / 7;
    align-self: center;
  }
  ${media.desktop} {
    grid-column: 7 / 13;
    width: 90%;
  }
`;
