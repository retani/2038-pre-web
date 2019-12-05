import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import MainVideo from 'components/MainVideo'

import './app.css'

const em = styled.em`
  text-decoration: underline;
`

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <MDXProvider components={{ MainVideo, em }}>
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
