import React from 'react'
import { Root, Routes } from 'react-static'
import { MDXProvider } from '@mdx-js/react'
import styled, {createGlobalStyle} from 'styled-components'

import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { globalStyles } from './config/styles'

import MainVideo from 'components/MainVideo'
import { p, table, dl, dd, dt, em, a, ul, li, br, LargeSpacer, StyledLink as Link } from 'components/HtmlElements'
import Spacer from 'components/Spacer'
import Button from 'components/Button'
import Ical from 'components/iCal'
import Accordion from 'components/Accordion'
import Countdown from 'components/Countdown'
import ImpLink from 'components/ImpLink'
import Document from 'components/Document'
import Logos from 'components/Logos'

import 'reset-css';

const GlobalStyle = createGlobalStyle`${globalStyles}`

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <GlobalStyle />
      <div className="content">
        <React.Suspense fallback={<em>&nbsp;</em>}>
          <MDXProvider components={{ MainVideo, em, a, p, table, Spacer, Link, dl, dd, dt, ul, li, br, Spacer, LargeSpacer, Button, iCal: Ical, Accordion, Countdown, ImpLink, Document, Logos }}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </MDXProvider>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
