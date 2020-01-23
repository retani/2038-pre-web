import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors, breakpoints, metrics } from '../config/styles'
import Accordion from './Accordion'

const numberTimes = {
  week: 1000 * 60 * 60 * 24 * 7,
  day: 1000 * 60 * 60 * 24,
  hour: 1000 * 60 * 60,
  minute: 1000 * 60,
  second: 1000
};

function renderOffsetObject(distance) {
  const { week, day, hour, minute, second } = numberTimes;
  distance += second
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  return {
    days: `${Math.floor(distance / day)}`.padStart(3,"0"),
    hours: hours < 10 ? `0${hours}` : `${hours}`,
    minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
    seconds: seconds < 10 ? `0${seconds}` : `${seconds}`
  };
}

export default ({children, dateUTC}) =>  {
  const parts = dateUTC.split("-")
  if (parts.length !== 5) {
    return <span>Format: YYYY-mm-dd-HH-MM (given: {dateUTC} ?)</span>
  }

  const [vw, setVw] = useState(0)

  const updateDimensions = () => {
      setVw(window.innerWidth)
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions);
    return( () => window.removeEventListener("resize", updateDimensions))
  }, [updateDimensions])

  const date = Date.UTC(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]), parseInt(parts[3]), parseInt(parts[4]))

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handler = setInterval(() => {
      const nowUTC = Math.floor((new Date()).getTime())
      setOffset(date.valueOf() - nowUTC)
    }, 1000)
    const nowUTC = Math.floor((new Date()).getTime())
    setOffset(date.valueOf() - nowUTC)
    return( () => clearInterval(handler))
  }, [])

  const o = renderOffsetObject(offset)
  const small = vw <= breakpoints.smallPx
  const offsetText = <Text>
      <span>-{offset < 0 ? 0 : o.days}{!small ? "d " : ":"}</span>
      <span>{offset < 0 ? 0 : o.hours}{!small ? "h " : ":"}</span>
      <span className="minutes">{offset < 0 ? 0 : o.minutes}{!small ? "m " : ":"}</span>
      <span className="seconds">{offset < 0 ? 0 : o.seconds}{!small ? "s" : ""}</span>
    </Text>

  return <Div>
    <Accordion 
        head={offsetText} 
        contentStyle={{paddingTop:"23px"}} 
        style={{marginBottom:0}}
        backgroundColorClosed={colors.green} 
        backgroundColorOpen={colors.turquoise}
      >
      {children}

    </Accordion>
  </Div>
}

const Div = styled.div`
/*  overflow: hidden;
  .hours {
    @media (max-width: 425px) {
      display: none;
    }
  }  
  .minutes {
    @media (max-width: 500px) {
      display: none;
    }
  }
  .seconds {
    @media (max-width: 575px) {
      display: none;
    }
  }*/
`

const Text = styled.span`
  @media ${ breakpoints.small } {
    font-size: ${ 25 }px;
    top: -4px;
    position: relative;
  }
`