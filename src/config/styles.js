const metrics = {
  large: {
    fontSizePx: 30,
    lineHeightPx: 32,
    lineTopPx: 7,
  },
  small: {
    fontSizePx: 20,
    lineHeightPx: 22,
    lineTopPx: 4,
  }
}

const breakpoints = {
  small: "(max-width: 768px)"
}

const dist = {
  lineTop: -metrics.large.lineTopPx + "px",
  spacer: "40px",
}

const colors = {
  bg: "#D8D8D8",
  blue: "#0000ff"
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
    `
  }
}

const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:500&display=swap');

  :root {
    font-size: ${ metrics.large.fontSizePx }px;
    letter-spacing: 1px;

    @media ${ breakpoints.small } {
      font-size: ${ metrics.small.fontSizePx }px;
    }

    background-color: ${ colors.bg };
  }

  * {
    scroll-behavior: smooth;
  }

  body {
    line-height: ${ metrics.large.lineHeightPx }px;
    @media ${ breakpoints.small } {
      line-height: ${ metrics.small.lineHeightPx }px;
    }    
    font-family: 'Roboto Mono', monospace;
  }
`

export {
  metrics,
  globalStyles,
  dist,
  colors,
  snippets
}