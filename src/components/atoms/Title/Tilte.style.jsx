import styled, { css } from "styled-components";
import { media } from "./../../../styles/mixins/media";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: normal;
    font-size: 36px;
    line-height: 32px;
  `}
`;
