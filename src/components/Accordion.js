import React, { useState } from 'react'
import styled from 'styled-components'

import { colors, dist, metrics } from '../config/styles'

export default ({children, head, contentStyle, backgroundColorClosed, backgroundColorOpen}) =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  let innerContentElem = null
  const backgroundColor = backgroundColorClosed && backgroundColorOpen ? ( isOpen ? backgroundColorOpen : backgroundColorClosed ) : null

  const toggle = () => {
    console.log(innerContentElem)
    setHeight(!isOpen ? innerContentElem.scrollHeight : 0)
    setIsOpen(!isOpen)
  }

  return <Container backgroundColor={backgroundColor}>
    <Head isOpen={isOpen} onClick={toggle}>
      <HeadText isOpen={isOpen}>
        {head}
      </HeadText>
    </Head>
    <Content isOpen={isOpen} height={height}>
      <InnerContent ref={elem => innerContentElem=elem} style={contentStyle}>
        {children}
      </InnerContent>
    </Content>
  </Container>
}

const Container = styled.div`
  margin-bottom: ${dist.spacer};
  ${ ({backgroundColor}) => backgroundColor && `
    &, > *, h2 span {
      background-color: ${ backgroundColor } !important;
      color: black;
    }
  `}
  * {
    transition: background-color 0.35s, height 0.7s;
  }
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
  /*padding-top: ${ ({isOpen}) => isOpen ? dist.spacer : "0" };*/
  overflow: hidden;
  height: ${ ({isOpen, height}) => isOpen ? height+"px" : "0" };
  box-sizing: border-box;
  background-color: ${ colors.white };
`

const InnerContent = styled.div`
  padding-top: ${ dist.spacer };
`