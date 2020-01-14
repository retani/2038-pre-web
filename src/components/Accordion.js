import React, { useState } from 'react'
import styled from 'styled-components'

import { colors, dist, metrics } from '../config/styles'

export default ({children, head, contentStyle}) =>  {
  const [isOpen, setIsOpen] = useState(false);

  return <Container>
    <Head isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}>
      <HeadText isOpen={isOpen}>
        {head}
      </HeadText>
    </Head>
    <Content isOpen={isOpen} style={contentStyle}>
      {children}
    </Content>
  </Container>
}

const Container = styled.div`
  margin-bottom: ${dist.spacer};
`

const Head = styled.h2`
  height: 60px;
  background-color: ${ ({isOpen}) => isOpen ? colors.blue : colors.white };
  text-align: center;
  cursor: pointer;
  user-select: none;
  font-size: ${ metrics.veryLarge.fontSizePx }px;
  line-height: 57px;
  &::before {
  content: "${ ({isOpen}) => isOpen ?  "-" : "+" }";
    position: absolute;
    left: ${dist.spacer}
  }
`

const HeadText = styled.span`
  display: inline-block;
  height: 100%;
  padding-left: ${ dist.letterWidth };
  padding-right: ${ dist.letterWidth };
  background-color: ${ ({isOpen}) => isOpen ? colors.white : colors.blue };
  color: ${ ({isOpen}) => isOpen ? colors.blue : colors.white };
  font-weight: 500;
`

const Content = styled.div`
  padding-top: ${dist.spacer};
  overflow: hidden;
  display: ${ ({isOpen}) => isOpen ? "block" : "none" };
  background-color: ${ colors.white };
`
