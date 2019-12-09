import styled from 'styled-components'
import { Link } from 'components/Router'

import { dist, snippets } from '../config/styles'
 
const blockStyle = `
  ${snippets.typography.topAdjust};
  margin-bottom: ${dist.spacer};
  margin-left: ${ dist.spacer };
  margin-right: ${ dist.spacer };
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
  padding-left: 1rem;
`

const em = styled.em`
  ${snippets.typography.underline};
`

const a = styled.a`
  ${snippets.typography.underline};
`

const StyledLink = styled(Link)`
  ${snippets.typography.underline};
`

export {
  p,
  a,
  table,
  dl,
  dd,
  dt,
  em,
  StyledLink
}