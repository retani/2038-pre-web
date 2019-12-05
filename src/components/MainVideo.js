import React from 'react'
import Vimeo from '@u-wave/react-vimeo';
 
export default ({vimeoId}) =>  <Vimeo
  video={vimeoId}
  responsive
  controls={false}
/>