import { css } from '@emotion/react';

export const globalStyles = css`
  *,
  *::before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;
