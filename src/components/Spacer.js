import React from 'react'
import styled from 'styled-components'

import { dist } from '../config/styles'

export default ({children}) =>  <Container>
  {children}
</Container>

const Container = styled.div`
  height: ${dist.spacer}
`

