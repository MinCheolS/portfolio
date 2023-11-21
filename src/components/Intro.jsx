import React from 'react'
import styled from 'styled-components'

const Intro = () => {
  return (
    <IntroContainer>
      <p>{'FRONT-END'}</p>
      <p>{'Developer'}</p>
    </IntroContainer>
  )
}

export default Intro

const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-45deg, #151515, #3a1058, #1c1031, #1a1166);
  animation: gradient 14s ease-in-out infinite;
  background-size: 400% 400%;
  /* border: 1px solid #eaeaea; */
  @keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

  p:nth-of-type(1) {
      padding: 10px;
      font-size: 12vw;
      font-weight: 800;
      white-space: pre-line;
      color: #ffffff;
  }
  p:nth-of-type(2) {
      padding: 10px;
      font-size: 10vw;
      font-weight: 800;
      white-space: pre-line;
      color: #ffffff;
  }
`;