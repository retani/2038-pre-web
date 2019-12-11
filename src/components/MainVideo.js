import React, { useState } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import Fullscreen from "react-full-screen";
import debounce from 'debounce'

import { dist, colors } from '../config/styles'
import ButtonLarge from './ButtonLarge'
import FullscreenButton from './FullscreenButton'


let timeoutHandler = null

const MainVideo = ({vimeoId}) => { 
  const [loaded, setLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const mouseMove = debounce(() => {
    setOverlay(true)
    if (timeoutHandler) {
      clearTimeout(timeoutHandler)
    }
    timeoutHandler = setTimeout(()=>setOverlay(false),700)
  },10)

  const triggerPlay = debounce(() => {
    (playing === shouldPlay) && setShouldPlay(!shouldPlay)
  }, 200, true)

  return  <Fullscreen
      enabled={fullscreen}
      onChange={f => setFullscreen(f)}
    >
    <Container isFullscreen={fullscreen}>
      <Vimeo
        style={{
          position:"relative",
          top:"50%"
        }}
        video={vimeoId}
        responsive
        play={shouldPlay}
        id="player"
        paused={!shouldPlay}
        controls={false}
        volume={1}
        onPlay={ () => setPlaying(true) }
        onPause={ () => setPlaying(false) }
        onEnd={ () => {setPlaying(false); setShouldPlay(false)} }
        onError={ () => {setPlaying(false); setShouldPlay(false)} }
        onLoaded={ () => setLoaded(true)}
      />
      <Overlay show={overlay || !playing} onMouseMove={mouseMove} onTouchEnd={()=>playing&&triggerPlay}>
        <ButtonContainer>
          { loaded &&
            <ButtonLarge style={{color: (!playing && shouldPlay ? colors.blue : null)}}
                  onClick={ triggerPlay }
                >
              { playing ? "STOP" : "PLAY"}
            </ButtonLarge>
          }
        </ButtonContainer>
        <FullscreenButtonContainer>
          <FullscreenButton 
            onClick={ event => { setFullscreen(!fullscreen) } }
            isOn={fullscreen}
          />
        </FullscreenButtonContainer>
      </Overlay>
    </Container>
  </Fullscreen>
}

export default MainVideo

const Container = styled.div`
  margin-bottom: ${dist.spacer};
  box-sizing: content-box;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background: rgba(0,0,0,0.1);
  position: relative;
  ${ props => props.isFullscreen && "top:50%; transform:translateY(-50%)" };
` 

const Overlay = styled.div`
  transition: opacity 0.35s, background-image 1.6s;
  opacity: ${ props => props.show ? 1 : 0};
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(0deg, ${colors.bg}77 0%, ${colors.bg}00 25%);
  top: 0;
  left:0;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: center;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const FullscreenButtonContainer = styled.div`
  position: absolute;
  bottom: ${ dist.spacer };
  right: ${ dist.spacer };
`