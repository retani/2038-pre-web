import React from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'

import { dist } from '../config/styles'
 
export default ({vimeoId}) =>  <Container>
  <Vimeo
    video={vimeoId}
    responsive
    controls={false}
  />
</Container>


const Container = styled.div`
  margin-bottom: ${dist.spacer};
  box-sizing: content-box;
  height: 177.78%;
  background: rgba(0,0,0,0.1);
`