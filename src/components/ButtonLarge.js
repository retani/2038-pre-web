import React from 'react'
import styled from 'styled-components'

import { metrics } from '../config/styles'

export default ({children, onClick, style}) => {
  return <Container onClick={onClick} style={style}>
    <Svg viewBox="0 0 225 88">
      <path className="st0" d="M183,86.5c22.3,0,40.5-19.1,40.5-42.5S205.3,1.5,183,1.5H42C19.7,1.5,1.5,20.6,1.5,44S19.7,86.5,42,86.5H183z"/>
      <path className="st1" d="M183,86.5c22.3,0,40.5-19.1,40.5-42.5S205.3,1.5,183,1.5H42C19.7,1.5,1.5,20.6,1.5,44S19.7,86.5,42,86.5H183z"/>
    </Svg>
    <Text>
      {children}
    </Text>
  </Container>
}

const Container = styled.div`
  display: inline-block;
  width: 225px;
  height: 88px;
  position: relative;
  stroke: #FFFFFF;
  color: white;
  * { 
    transition: all 0.15s;
    opacity: 0.8;
    path {
      opacity: 0.5;
    }      
  }
  &:hover * {
    cursor: pointer;
    opacity: 1;
    path {
      opacity: 0.95;
    }
  }
`

const Text = styled.div`
  position: absolute;
  top:-2px; // center text tweak
  width: 100%;
  height: 100%;
  text-align:center;
  line-height: 88px;
  font-size: ${ 1.8 * metrics.large.fontSizePx }px;
  user-select: none;
`

const Svg = styled.svg`
	.st0{fill:#1D1D1B;stroke:#1D1D1B;stroke-miterlimit:10;}
	.st1{fill:#1D1D1B;stroke:#1D1D1B;stroke-width:3;}
`
