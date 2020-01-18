import React from 'react'
import styled from 'styled-components'

import { dist, breakpoints } from '../config/styles'

export default () =>  <Container>
  <ImgLarge src="/logos.png"/>
  <ImgSmall src="/logosSmall.png"/>
</Container>

const Container = styled.div`
  /*height: ${dist.spacer};
  @media ${ breakpoints.small } {
    height: ${dist.smallSpacer}
  }*/
`

const ImgLarge = styled.img`
  margin-top: -15px;
  margin-left: 25px; 
  padding-bottom: 32px;

  display: initial;
  @media ${ breakpoints.small } {
    display: none;
  }  
`

const ImgSmall = styled.img`
  margin-top: -5px;
  margin-left: 25px; 
  padding-bottom: 32px;

  display: none;
  @media ${ breakpoints.small } {
    display: initial;
  }  
`