import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'

import ButtonSmall from './ButtonSmall'
import { p as P } from './HtmlElements'

export default ({text}) =>  {

  return <Container>
    <Link to="/imprint">
      <ButtonSmall textOffset="3px">
        { text }
      </ButtonSmall>
    </Link>
  </Container>
}

const Container = styled(P)`
  text-align: center;
`


