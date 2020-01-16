import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors, dist, metrics } from '../config/styles'

export default ({children, head, contentStyle, backgroundColorClosed, backgroundColorOpen, style}) =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  let innerContentElem = null
  const backgroundColor = backgroundColorClosed && backgroundColorOpen ? ( isOpen ? backgroundColorOpen : backgroundColorClosed ) : null

  const toggle = () => {
    setHeight(!isOpen ? innerContentElem.clientHeight + parseInt(dist.spacer) + "px" : 0)
    setIsOpen(!isOpen)
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
    <Content isOpen={isOpen} height={height} onanimationend={()=>console.log("end")}>
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
  overflow: hidden;
  height: ${ ({height}) => height };
  box-sizing: border-box;
  background-color: ${ colors.white };
`

const InnerContent = styled.div`
  padding-top: ${ dist.spacer };
`