import React from 'react'
import styled from 'styled-components'

import { dist, colors, metrics, breakpoints } from '../config/styles'

export default ({children}) =>  <Center>
    <Container>
      {children}
    </Container>
  </Center>

const Container = styled.div`
  background-color: ${ colors.white };
  max-width: 340px;
  font-size: ${ metrics.small.fontSizePx }px;
  line-height: ${ metrics.small.lineHeightPx }px;
  @media (min-width: ${breakpoints.smallPx+1}px) {
    font-size: ${ metrics.medium.fontSizePx }px;
    line-height: ${ metrics.medium.lineHeightPx }px;
    max-width: 700px;
    margin-left: 120px;
    margin-right: 120px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`