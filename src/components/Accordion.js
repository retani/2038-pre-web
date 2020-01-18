import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors, dist, metrics, breakpoints } from '../config/styles'
import Spacer from './Spacer'

export default ({children, head, contentStyle, backgroundColorClosed, backgroundColorOpen, style}) =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  let innerContentElem = null
  const backgroundColor = backgroundColorClosed && backgroundColorOpen ? ( isOpen ? backgroundColorOpen : backgroundColorClosed ) : null

  const toggle = () => {
    setHeight(!isOpen ? innerContentElem.clientHeight + "px" : 0)
    setIsOpen(!isOpen, )
  }

  const updateDimensions = () => {
    if (isOpen) {
      setHeight("auto")
    }
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return( () => window.removeEventListener("resize", updateDimensions))
  }, [updateDimensions])

  return <Container backgroundColor={backgroundColor} style={style}>
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
  @media ${ breakpoints.small } {
    margin-bottom: ${dist.smallSpacer};
  }
  ${ ({backgroundColor}) => backgroundColor && `
    &, > *, h2 span {
      background-color: ${ backgroundColor } !important;
      color: black;
    }
  `}
  * {
    transition: background-color 0.35s, height 0.6s;
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
    left: ${dist.spacer};
    @media ${ breakpoints.small } {
      left: ${dist.smallSpacer};
    }
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
  overflow: hidden;
  height: ${ ({height}) => height };
  box-sizing: border-box;
  div { 
    ${ ({isOpen}) => isOpen ? null : "background-color:transparent !important;"};
    transition: background-color 1s;
  }
`

const InnerContent = styled.div`
`