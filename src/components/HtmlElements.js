import styled from 'styled-components'

import { dist, snippets } from '../config/styles'
 
const blockStyle = `
  ${snippets.typography.topAdjust};
  margin-bottom: ${dist.spacer};
  margin-left: ${ dist.spacer };
  margin-right: ${ dist.spacer };
`

const p = styled.p`${blockStyle}`

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

export {
  p,
  table,
  dl,
  dd,
  dt
}