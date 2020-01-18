const metrics = {
  veryLarge: {
    fontSizePx: 30 * 1.25,
  },
  large: {
    fontSizePx: 30,
    lineHeightPx: 33,
    lineTopPx: 5,
  },
  medium: {
    fontSizePx: 20,
    lineHeightPx: 24,
    lineTopPx: 5,
  },
  small: {
    fontSizePx: 15,
    lineHeightPx: 18,
    lineTopPx: 2,
  }  
}

const breakpoints = {
  small: "(max-width: 750px)",
  smallPx: 750,
}

const dist = {
  lineTop: -metrics.large.lineTopPx + "px",
  spacer: "40px",
  smallSpacer: "20px",
  largeButtonHeight: "60px",
  smallButtonHeight: "30px",
  letterWidth: "0.65em",
}

const colors = {
  bg: "#D8D8D8",
  blue: "#0000ff",
  turquoise: "#00ffff",
  white: "white",
  green: "#00ff00",
}

const snippets = {
  typography: {
    topAdjust: `
      position: relative;
      margin-top: ${-2*metrics.large.lineTopPx + "px"};
      top: ${metrics.large.lineTopPx + "px"};
      @media ${ breakpoints.small } {
        margin-top: ${-2*metrics.small.lineTopPx + "px"};
        top: ${metrics.small.lineTopPx + "px"};
      }
    `,
    underline: `
      text-decoration: none;
      background-size: 1px 1em;
      display: inline;
      box-shadow:
        inset 0px -0.1em ${colors.bg},
        inset 0 -0.2em #000;
    `
  }
}

/*
  border-style: solid;
  border-color: black;
  border-width: 0 0 1px 0;
  padding-bottom: -1px;
*/

/*
  background-size: 1px 1em;
  box-shadow:
    inset 0 -0.1em black,
    inset 0 -0.2em ${colors.bg};
*/

const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap');

  @font-face {
    font-family: "Roboto Mono";
    src: url("/RobotoMono-Regular.ttf");
    font-weight: 400;
  }

  @font-face {
    font-family: "Roboto Mono";
    src: url("/RobotoMono-Medium.ttf");
    font-weight: 500;
  }  

  :root {
    font-size: ${ metrics.large.fontSizePx }px;
    letter-spacing: 1px;

    @media ${ breakpoints.small } {
      font-size: ${ metrics.medium.fontSizePx }px;
    }

    background-color: ${ colors.bg };
  }

  * {
    scroll-behavior: smooth;
  }

  body {
    line-height: ${ metrics.large.lineHeightPx }px;
    @media ${ breakpoints.small } {
      line-height: ${ metrics.medium.lineHeightPx }px;
    }    
    font-family: 'Roboto Mono', monospace;
  }
`

export {
  metrics,
  globalStyles,
  dist,
  colors,
  snippets,
  breakpoints
}