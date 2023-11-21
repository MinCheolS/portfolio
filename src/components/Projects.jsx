import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { projects } from '../components/common/Projects';
import arrow from '../assets/arrow.png'
import shortcut from '../assets/shortcut.png';
import github from '../assets/github.png';

const Projects = () => {
    const [index, setIndex] = useState(1)

    const onPrevHandler = () => {
        const newIndex = index === 1 ? projects.length : index - 1
        setIndex(newIndex)
    }

    const onNextHandler = () => {
        const newIndex = index === projects.length ? 1 : index + 1
        setIndex(newIndex)
    }

    const openLinkHandler = ({name, link}) => {
        window.open(link, '_blank', 'noopener')
    }

  return (
    <ProjectsContainer>
        <h1>{'Projects'}</h1>
        <ProjectDiv>
            <ProjectsBtn transform='prev' onClick={onPrevHandler}>
                <img src={arrow} alt='arrow img'/>
            </ProjectsBtn>
            {projects.map((item) => item.id === index && (
                    <ProjectsDiv key={item.id} visible={item.id === index}>
                        <ProjectsImgDiv>
                            <img src={item.img} alt='project img'/>
                        </ProjectsImgDiv>
                        <ProjectsInfoDiv>
                            <h2>{item.name}</h2>
                            <InfoDiv>
                                <span>{item.team}</span>
                                <span>{item.period}</span>
                            </InfoDiv>
                            <h3>{item.description}</h3>
                            <div>
                                <TagDiv>
                                    {(item.skills).split(',').map((skill) => 
                                        <Tag key={skill} backgroundcolor='#2e2c2c'>{skill}</Tag>
                                    )}
                                </TagDiv>
                            </div>
                            <div>
                                <BtnDiv>
                                    {Object.entries(item.links).map(([name, link]) => (
                                        <Btn key={name} name={name} onClick={() => openLinkHandler({ link })}>
                                            <img src={name === '사이트바로가기' ? shortcut : github} alt={`${name} img`}/>
                                            {name}
                                        </Btn>
                                    ))}
                                </BtnDiv>
                            </div>
                        </ProjectsInfoDiv>
                    </ProjectsDiv>
                ),
            )}
            <ProjectsBtn transform='next' onClick={onNextHandler}>
                <img src={arrow} alt='arrow img'/>
            </ProjectsBtn>
        </ProjectDiv>
        <ProjectDownDiv>
            <ProjectsDownBtn transform='prev' onClick={onPrevHandler}>
                <img src={arrow} alt='arrow img'/>
            </ProjectsDownBtn>
            {projects.map((_, i) => (
                <Dot key={i} active={index === i + 1}>●</Dot>
            ))}
            <ProjectsDownBtn transform='next' onClick={onNextHandler}>
                <img src={arrow} alt='arrow img'/>
            </ProjectsDownBtn>
        </ProjectDownDiv>
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
    width: 100%;
    color:#ffffff;
    /* border: solid 1px #ffaaaa; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 60px 0 20px 0;
        font-size: 50px;
        font-weight: 700;
    }
`;

const ProjectDiv = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: solid 1px #aac1ff; */
`;

const ProjectsBtn = styled.button`
    /* border: solid 1px #aac1ff; */
    width: 90px;
    height: 90px;
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
    transform: ${(props) => props.transform === 'prev' ? '90deg' : '-90deg'};
    filter: invert(30%);
    animation: ${(props) => props.transform === 'prev' ? 'prevMoving' : 'nextMoving'} 1800ms ease-in-out infinite;
    @keyframes prevMoving {
        0% {
            transform: rotate(90deg) translateY(0px);
        }
        50% {
            transform: rotate(90deg) translateY(20px);
        }
        100% {
            transform: rotate(90deg) translateY(0px);
        }
    }
    @keyframes nextMoving {
        0% {
            transform: rotate(-90deg) translateY(0px);
        }
        50% {
            transform: rotate(-90deg) translateY(20px);
        }
        100% {
            transform: rotate(-90deg) translateY(0px);
        }
    }

    img { 
        max-width: 100%;
        border: 0;
        vertical-align: middle;
    }

    @media screen and (max-width:767px) {
        display: none;
    }
`;

const ProjectsDiv = styled.div`
    /* border: solid 1px #aac1ff; */
    width: 900px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
    animation: itemFadeIn 0.8s ease-in-out;

    @keyframes itemFadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
    }
`;

const ProjectsImgDiv = styled.div`
    border: solid 1px #333333;
    display: flex;
    justify-content: center;

    img {
        max-width: 100%;
        border: 0;
        vertical-align: middle;
    }
`;

const ProjectsInfoDiv = styled.div`
    /* border: solid 1px #aac1ff; */
    display: flex;
    flex-direction: column;

    h2 {
        margin-top: 10px;
        font-size: 30px;
        font-weight: 900;
    }
    
    h3 {
        /* border: solid 1px #aac1ff; */
        font-size: 18px;
        line-height: 22px;
        text-align: justify;
        white-space: pre-line;
        margin-top: 15px;
    }
`;

const InfoDiv = styled.div`
    /* border: solid 1px #aac1ff; */
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
    
    span:nth-of-type(1) {
        color: #A4A4FF;
        font-weight: 500;
    }

    span:nth-of-type(2) {
        color: #7f7f96;
        font-weight: 500;
    }
`;

const TagDiv = styled.div`
    margin-top: -5px;
    /* border: solid 1px #aac1ff; */
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const Tag = styled.span`
    /* border: solid 1px #aac1ff; */
    display: flex;
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.backgroundcolor};
    font-size: 15px;
`;

const BtnDiv = styled.div`
    /* border: solid 1px #aac1ff; */
    margin-top: 15px;
    display: flex;
    gap: 10px;
`;

const Btn = styled.button`
    /* color: #ffffff; */
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 700;
    color: ${(props) => props.name === '사이트바로가기' ? '#ffffff' : '#000000'};
    background-color: ${(props) => props.name === '사이트바로가기' ? '#2f1193' : '#ffffff'};
    cursor: pointer;
    
    img {
        width: 20px;
        height: 20px;
        filter: ${(props) => props.name === '사이트바로가기' ? ' invert(1)' : ''};
    }
`;

const ProjectDownDiv = styled.div`
    /* border: solid 1px #aac1ff; */
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (min-width:767px) {
        display: none;
    }
`;

const Dot = styled.div`
    color: #7f7f96;

    ${({ active }) => active && css`color: #ffffff;`};
`;

const ProjectsDownBtn = styled.button`
    /* border: solid 1px #aac1ff; */
    width: 45px;
    height: 45px;
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
    transform: ${(props) => props.transform === 'prev' ? '90deg' : '-90deg'};
    filter: invert(30%);
    animation: ${(props) => props.transform === 'prev' ? 'prevMoving' : 'nextMoving'} 1800ms ease-in-out infinite;
    @keyframes prevMoving {
        0% {
            transform: rotate(90deg) translateY(0px);
        }
        50% {
            transform: rotate(90deg) translateY(20px);
        }
        100% {
            transform: rotate(90deg) translateY(0px);
        }
    }
    @keyframes nextMoving {
        0% {
            transform: rotate(-90deg) translateY(0px);
        }
        50% {
            transform: rotate(-90deg) translateY(20px);
        }
        100% {
            transform: rotate(-90deg) translateY(0px);
        }
    }

    img { 
        max-width: 100%;
        border: 0;
        vertical-align: middle;
    }

    @media screen and (min-width:767px) {
        display: none;
    }
`;