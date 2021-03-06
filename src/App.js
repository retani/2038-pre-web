import React from 'react'
import { Root, Routes, Head } from 'react-static'
import { MDXProvider } from '@mdx-js/react'
import styled, {createGlobalStyle} from 'styled-components'

import { Router } from 'components/Router'
import { globalStyles } from './config/styles'

import MainVideo from 'components/MainVideo'
import { p, table, dl, dd, dt, em, a, ul, li, br, OnlyLarge, LargeSpacer, StyledLink as Link } from 'components/HtmlElements'
import Spacer from 'components/Spacer'
import Button from 'components/Button'
import Ical from 'components/iCal'
import Accordion from 'components/Accordion'
import Countdown from 'components/Countdown'
import ImpLink from 'components/ImpLink'
import Document from 'components/Document'
import Logos from 'components/Logos'
import ScrollTop from 'components/ScrollTop'

import 'reset-css';

const GlobalStyle = createGlobalStyle`${globalStyles}`

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Head>
        <title>2038</title>
        {/*<style>
          @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap&subset=latin-ext');
        </style>*/}
      </Head>
      <GlobalStyle />
      <React.Suspense fallback={<Loading />}>
        <MDXProvider components={{ MainVideo, em, a, p, table, Spacer, Link, dl, dd, dt, ul, li, br, Spacer, LargeSpacer, Button, iCal: Ical, Accordion, Countdown, ImpLink, Document, Logos, ScrollTop, OnlyLarge }}>
          <Router>
            <Routes path="*" />
          </Router>
        </MDXProvider>
      </React.Suspense>
    </Root>
  )
}

export default App

const Loading = styled.div`
  width: 100%;
  background: rgba(0,0,0,0.1);
  opacity: 0.8;
  height: 0;
  padding-bottom: 56.25%;
`