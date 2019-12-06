import React from 'react'
import styled from 'styled-components'

import { metrics } from '../config/styles'

export default ({children}) =>  <Container>
  <Svg viewBox="0 0 150 58">
    <Path d="M122,57c14.9,0,27-12.6,27-28S136.9,1,122,1H28.2C13.2,1,1,13.6,1,29s12.2,28,27.2,28H122z"/>
  </Svg>
  <Text>
    {children}
  </Text>
</Container>

const Container = styled.span`
  display: inline-block;
  width: 150px;
  height: 58px;
  position: relative;
  stroke: #FFFFFF;
  color: white;
  &:hover {
    color: black;
    stroke: #000000;
    opacity: 0.5;
    cursor: pointer;
  }
`

const Text = styled.span`
  position: absolute;
  display: block;
  top:0;
  width: 100%;
  height: 100%;
  text-align:center;
  line-height: 58px;
  font-size: ${ metrics.large.fontSizePx }px;
`

const Svg = styled.svg``

const Path = styled.path`
  fill: none;
  stroke-width: 2;
`