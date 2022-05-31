import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${theme.colors.white} 0%,
      ${theme.colors.white} 25%,
      ${theme.colors.secundaryBkg} 25%,
      ${theme.colors.secundaryBkg} 25%
    );
    padding: 24px 0;
    ${media.desktop} {
      background: linear-gradient(
        to bottom,
        ${theme.colors.white} 0%,
        ${theme.colors.white} 35%,
        ${theme.colors.secundaryBkg} 35%,
        ${theme.colors.secundaryBkg} 35%
      );
      padding: 100px 0;
    }
  `}
`;

export const WrapperCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    background-image: url("/assets/img/outlines_icons.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 0px 14px 37px 19px rgba(126, 126, 126, 0.08);
    margin: 16px 24px 0;
    overflow-x: auto;
    width: 100%;
    ${media.desktop} {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      width: 1280px;
      overflow-x: none;
      padding: 40px 0;
    }
  `}
`;
