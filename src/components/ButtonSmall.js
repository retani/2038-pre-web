import React from 'react'
import styled from 'styled-components'

import { metrics, dist, colors, textStyle } from '../config/styles'

export default ({children, onClick, style, invert, textOffset}) => {
  return <Container invert={invert || false} onClick={onClick} style={style}>
      <Text offset={textOffset}>{children}</Text>
  </Container>
}

const Container = styled.span`
  display: inline-block;
  width: 70px;
  height: ${ dist.smallButtonHeight };
  margin-bottom: 5px;
  position: relative;
  border-radius: 15px;
  background-color: ${ ({invert}) => invert ? colors.white : colors.blue };
  color: ${ ({invert}) => !invert ? colors.white : colors.blue };
  font-size: ${ metrics.medium.fontSizePx }px;
  line-height: ${ dist.smallButtonHeight };
  transition: all 0.3s !important;
  &:hover {
    background-color: ${ ({invert}) => !invert ? colors.white : colors.blue };
    color: ${ ({invert}) => invert ? colors.white : colors.blue };
    cursor: pointer;
  }
`

const Text = styled.span`
  position: relative;
  font-weight: 500;
  left: ${ ({offset}) => offset };
`