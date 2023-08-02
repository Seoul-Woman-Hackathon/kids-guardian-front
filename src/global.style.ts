import { css } from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: "SUITE Variable";
    font-weight: 300 900;
    src: url("./SUITE-Variable.woff2") format("woff2-variations");
  }
  *,
  *::before,
  *:after {
    font-family: "SUITE Variable";
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
