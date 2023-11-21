import React from 'react'
import styled from 'styled-components'
import puzzle from '../assets/puzzle.png'

const About = () => {
  return (
    <AboutContainer>
        <ImgDiv>
            <Img src={puzzle} alt='img'/>
        </ImgDiv>
        <DivContainer>
            <SayingDiv>
                <p>{'소통하고 함께 성장하는 개발자'}</p>
            </SayingDiv>
            <DescriptionDiv>
                <p>{'안녕하세요! 프론트엔드 개발자 신민철입니다.'}</p>
                <p>
                    <strong>{'소통과 협업을 중요'}</strong>
                    {'하게 생각하며, \n 혼자가 아닌 '}
                    <strong>{'함께 성장'}</strong>
                    {'하는 것을 최선으로 생각합니다.'}
                </p>
                <p>
                    {'그렇기에 항상 '}
                    <strong>{'배우는 자세'}</strong>
                    {'를 가지며, \n 해내고자 하는 '}
                    <strong>{'끈기'}</strong>
                    {'를 가지고 임합니다.'}
                </p>
                <p>
                    {'더 나아가 '}
                    <strong>{'팀원들과 좋은 시너지'}</strong>
                    {'를 낼 수 있는 개발자가 되고자 합니다.'}
                </p>
            </DescriptionDiv>
        </DivContainer>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
    width: 100%;
    color: #ffffff;
    /* border: solid 1px #ffffff; */
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ImgDiv = styled.div`
    /* border: solid 1px #ffffff; */
    width: 40%;
    height: 80%;
    margin: 120px 50px 50px 10px;
    opacity: 0.7;

    @media screen and (max-width:1023px) {
        display: none;
    }

    @media screen and (max-width:767px) {
        display: none;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
`;

const SayingDiv = styled.div`
    padding-top: 100px;
    
    p {
        font-size: 4vw;
        font-weight: 800;
        white-space: pre-line;
        
        @media screen and (max-width:1023px) {
            font-size: 5vw;
        }

        @media screen and (max-width:767px) {
            font-size: 5vw;
        }
    }
`
const DescriptionDiv = styled.div`
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    p {
        font-size: 1.8vw;
        line-height: 40px;
        font-weight: 500;
        white-space: pre-line;
        
        @media screen and (max-width:1023px) {
            font-size: 2.5vw;
        }

        @media screen and (max-width:767px) {
            font-size: 2.5vw;
        }
    }
        
    p > strong {
        padding: 0 3px;
        font-weight: 600;
        color: #ffff00;
    }
`