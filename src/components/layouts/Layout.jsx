import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <StLayout>
        <Header />
        <LayoutMain>{children}</LayoutMain>
    </StLayout>
  )
}

export default Layout

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1b1d20;
`;

const LayoutMain = styled.div`
  width: 100%;
  margin: auto;
  
  & > div {
    height: 100vh;
    min-height: 850px;
    position: relative;
  }
`;