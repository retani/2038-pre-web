import React from 'react'
import styled from 'styled-components'

import { dist, breakpoints } from '../config/styles'

export default ({children, stayLarge, onlySmall}) => <Container 
  onlySmall={onlySmall} 
  stayLarge={stayLarge}
  >
    {children}
</Container>

const Container = styled.div`
  height: ${dist.spacer};
  @media ${ breakpoints.small } {
    height: ${dist.smallSpacer};
  }
  ${ ({stayLarge}) => stayLarge && `
    @media ${ breakpoints.small } {
      height: ${dist.smallSpacer};
  }`}
  ${ ({onlySmall}) => onlySmall && `
    display: none;
    @media ${ breakpoints.small } {
      display: block;
  }`}  
`

