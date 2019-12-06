import React, { useState } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import Fullscreen from "react-full-screen";

import { dist, colors } from '../config/styles'
import ButtonLarge from './ButtonLarge'

const MainVideo = ({vimeoId}) => { 
  const [loaded, setLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  return <Container>
    <Fullscreen
        enabled={fullscreen}
        onChange={f => setFullscreen(f)}
      >
      <Vimeo
        video={vimeoId}
        responsive
        play={shouldPlay}
        id="player"
        paused={!shouldPlay}
        controls={false}
        onPlay={ () => setPlaying(true) }
        onPause={ () => setPlaying(false) }
        onEnd={ () => {setPlaying(false); setShouldPlay(false)} }
        onError={ () => {setPlaying(false); setShouldPlay(false)} }
        onLoaded={ () => setLoaded(true)}
      />
      {/*shouldPlay && "shouldPlay"}
      {playing && "playing"*/}
      <Overlay playing={shouldPlay}>
        <ButtonContainer>
          { loaded &&
            <ButtonLarge style={{color: (!playing && shouldPlay ? colors.blue : null)}}
                  onClick={ () => (playing === shouldPlay) && setShouldPlay(!shouldPlay) }
                >
              { playing ? "STOP" : "PLAY"}
            </ButtonLarge>
          }
          {/*<ButtonLarge 
              onClick={ () => setFullscreen(!fullscreen) }
            >
            fs
          </ButtonLarge>*/}
        </ButtonContainer>
      </Overlay>
    </Fullscreen>
  </Container>
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
`

const Overlay = styled.div`
  transition: opacity 0.35s, background-image 1.6s;
  opacity: ${ props => props.playing ? 0 : 1};
  &:hover {
    opacity: 1;
  }
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