import React from 'react'
import styled from 'styled-components'

import { metrics, dist } from '../config/styles'

export default ({children, onClick, style}) => {
  return <Container onClick={onClick} style={style}>
      {children}
  </Container>
}

const Container = styled.div`
  display: inline-block;
  width: 138px;
  height: ${ dist.largeButtonHeight };
  position: relative;
  background-color: #FFFFFF;
  border-radius: 30px;
  color: black;
  font-size: ${ metrics.veryLarge.fontSizePx }px;
  line-height: ${ dist.largeButtonHeight };
  mix-blend-mode: lighten;
  transition: all 0.15s;
  opacity: 0.65;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

