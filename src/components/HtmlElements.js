import styled from 'styled-components'
import { Link } from 'components/Router'

import { dist, snippets, breakpoints } from '../config/styles'
 
const blockStyle = `
  ${snippets.typography.topAdjust};

  padding-bottom: ${dist.spacer};
  margin-left: ${ dist.spacer };
  margin-right: ${ dist.spacer };
  @media ${ breakpoints.small } {
    padding-bottom: ${dist.smallSpacer};
    margin-left: ${ dist.smallSpacer };
    margin-right: ${ dist.smallSpacer };
  }
  white-space: pre-wrap;
`

const BlockStyleDiv = styled.div`
  ${blockStyle}
`

const p = styled.p`
  ${blockStyle}
  ${ props => props.color && "color:" + props.color };
`

const table = styled.table`${blockStyle}`

const dl = styled.dl`
  ${blockStyle}
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  `

const dt = styled.dt`
  width: 20.5ex;
  float:left;
  box-sizing:content-box;
  clear: left;
  position: relative;
  &::after {
    content: ":";
    position: absolute;
    right:0;
  }
`

const dd = styled.dd`
  // white-space: nowrap;
  float: left;
  padding-left: ${dist.letterWidth};
`

const em = styled.em`
  ${snippets.typography.underline};
`

const ul = styled.ul`
  ${blockStyle};
`

const li = styled.li`
  &::before {
    content: "- ";
  }
  margin-left: calc( 2 * ${ dist.letterWidth} );
  text-indent: calc( -2 * ${ dist.letterWidth} );
`

const br = styled.br`
${ ({onlySmall}) => onlySmall && "display: none;"}
  @media ${ breakpoints.small } {
    ${ ({onlySmall}) => onlySmall && "display: inline;"}
  }
`

const a = styled.a`
  ${snippets.typography.underline};
  word-break: break-all;
`

const StyledLink = styled(Link)`
  ${snippets.typography.underline};
`

const LargeSpacer = styled.div`
  height: 180px;
`

const ScrollTop = () => {
  window.scrollTo(0,0);
  return null
}

export {
  p,
  a,
  table,
  dl,
  dd,
  dt,
  em,
  ul,
  li,
  br,
  StyledLink,
  LargeSpacer,
  BlockStyleDiv,
  ScrollTop
}