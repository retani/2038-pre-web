import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import { p as P } from './HtmlElements'

export default ({children}) =>  {

  return <Container>
    <Button>ical</Button>
  </Container>
}

const Container = styled(P)`
  text-align: center;
`

