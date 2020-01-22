import React from 'react'
import styled from 'styled-components'

export default ({onClick, style, isOn=false}) => {
  return <Container onClick={onClick} style={style}>
    <Svg viewBox="0 0 40 40">
      <circle className="st0" cx="20" cy="20" r="20" />
      { !isOn ?
        <g>
          <polyline className="st1" points="17,29 11,29 11,23 "/>
          <polyline className="st1" points="23,29 29,29 29,23 "/>
          <polyline className="st1" points="11,17 11,11 17,11 "/>
          <polyline className="st1" points="29,17 29,11 23,11 "/>
        </g>
        :
        <g>
          <polyline className="st1" points="10,24 16,24 16,30 "/>
          <polyline className="st1" points="29.5,24 23.5,24 23.5,30 "/>
          <polyline className="st1" points="16,10 16,16 10,16 "/>
          <polyline className="st1" points="23.5,10 23.5,16 29.5,16 "/>
        </g>
      }
    </Svg>
  </Container>
}

const Container = styled.div`
  display: block;
  width:40px;
  height: 40px;
  position: relative;
  stroke: #FFFFFF;
  color: white;
  * { 
    transition: all 0.15s;
    opacity: 1;
    path {
      opacity: 1;
    }    
  }
  &:hover * {
    cursor: pointer;
    opacity: 1;
    path {
      opacity: 1;
    }
  }
`

const Svg = styled.svg`
	.st0{fill:#FFFFFF; stroke:transparent;}
	.st1{fill:none;stroke:#000000;stroke-width:2;}
`
