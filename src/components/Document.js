import React from 'react'
import styled from 'styled-components'

import { dist, colors, metrics } from '../config/styles'

export default ({children}) =>  <Center>
    <Container>
      {children}
    </Container>
  </Center>

const Container = styled.div`
  background-color: ${ colors.white };
  max-width: 1060px;
  font-size: ${ metrics.medium.fontSizePx }px;
  line-height: ${ metrics.medium.lineHeightPx }px;
  @media (min-width: 800px) {
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