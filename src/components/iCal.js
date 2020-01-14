import React from 'react'
import styled from 'styled-components'

import ButtonSmall from './ButtonSmall'
import { p as P } from './HtmlElements'

export default ({children}) =>  {

  return <Container>
    <ButtonSmall invert textOffset="1px">
      iCAL
    </ButtonSmall>
  </Container>
}

const Container = styled(P)`
  text-align: center;
  letter-spacing: 0.02em;
`

