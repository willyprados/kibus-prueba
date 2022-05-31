import styled, { css } from "styled-components";
import { media } from "@/styles/mixins/media";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    background-image: url("/assets/img/outlines_icons.png");
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: auto;
    margin: 16px 24px;
    ${media.desktop} {
      display: flex;
      justify-content: space-around;
      margin: 100px auto;
      width: 1280px;
      overflow-x: none;
      padding: 40px 0;
      border-radius: 20px;
      box-shadow: 0px 14px 37px 19px rgba(126, 126, 126, 0.08);
    }
  `}
`;
