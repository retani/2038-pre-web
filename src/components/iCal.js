import React from 'react'
import styled from 'styled-components'

import ButtonSmall from './ButtonSmall'
import { p as P } from './HtmlElements'

export default ({children}) =>  {

  return <Container>
    <a href="/2038-press-briefing.ics" download>
      <ButtonSmall textOffset="1px">
        iCAL
      </ButtonSmall>
    </a>
  </Container>
}

const Container = styled(P)`
  text-align: center;
  letter-spacing: 0.02em;
`

