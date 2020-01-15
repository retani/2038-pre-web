import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors } from '../config/styles'
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
  distance += minute
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  return {
    days: `${Math.floor(distance / day)}`,
    hours: hours < 10 ? `0${hours}` : `${hours}`,
    minutes: minutes < 10 ? `0${minutes}` : `${minutes}`
  };
}

export default ({children, dateUTC}) =>  {
  const parts = dateUTC.split("-")
  if (parts.length !== 5) {
    return <span>Format: YYYY-mm-dd-HH-MM (given: {dateUTC} ?)</span>
  }

  

  const date = Date.UTC(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]), parseInt(parts[3]), parseInt(parts[4]))

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handler = setInterval(() => {
      const nowUTC = Math.floor((new Date()).getTime())
      setOffset(date.valueOf() - nowUTC)
    }, 1000)
    return( () => clearInterval(handler))
  }, [])

  const o = renderOffsetObject(offset)
  const offsetText = offset > 0 ? 
    <span>-{o.days}d
      <span className="hours">&nbsp;{o.hours}h</span>
      <span className="minutes">&nbsp;{o.minutes}m</span>
    </span>
    : `0d 0h 0m`

  return <Div>
    <Accordion head={offsetText} contentStyle={{paddingTop:"22px"}}>
      {children}
    </Accordion>
  </Div>
}

const Div = styled.div`
  > * > *, h2 span {
    background-color: ${colors.turquoise};
    color: black;
  }
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
`