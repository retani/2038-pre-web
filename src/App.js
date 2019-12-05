import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { MDXProvider } from '@mdx-js/react'
import styled, {createGlobalStyle} from 'styled-components'

import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { globalStyles } from './config/styles'

import MainVideo from 'components/MainVideo'
import { p, table, dl, dd, dt } from 'components/HtmlElements'
import Spacer from 'components/Spacer'

import 'reset-css';

const GlobalStyle = createGlobalStyle`${globalStyles}`

const em = styled.em`
  text-decoration: underline;
`

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['index'])

function App() {
  return (
    <Root>
      <GlobalStyle />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <MDXProvider components={{ MainVideo, em, p, table, Spacer, Link, dl, dd, dt, Spacer }}>
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
