import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { etc, skills } from '../components/common/Skills';

const Skill = () => {
    const [hover, setHover] = useState('')
    //
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1023);

    const mouseOverHandler = (name) => setHover(name)
    const mouseLeaveHandler = () => setHover('')

    //
    useEffect(() => {
        const sizeeHandler = () => {
            setIsSmallScreen(window.innerWidth <= 1023);
        };

        window.addEventListener('resize', sizeeHandler);

        return () => {
            window.removeEventListener('resize', sizeeHandler);
        };
    }, []);

    const skillList = isSmallScreen ? [skills.slice(0, 2), skills.slice(2, 4), skills.slice(4)] : [skills.slice(0, 4), skills.slice(4)];
    const etcList = isSmallScreen ? [etc.slice(0, 2), etc.slice(2)] : [etc.slice(0, 4)];

  return (
    <SkillContainer>
        <h1>{'SKILLS'}</h1>
        {
            skillList.map((skill, skillidx) => (
                <SkillsDiv key={skillidx}>
                    {skill.map((s) => (
                        <SkillDiv
                            key={s.name}
                            onMouseOver={() => mouseOverHandler(s.name)}
                            onMouseLeave={mouseLeaveHandler}
                            hover={hover === s.name}
                            category={s.category}
                        >
                            <ul>
                                <li>
                                    <img src={s.img} alt={`${s.name} img`}/>
                                    {isSmallScreen ? (
                                            <div>
                                                <h2>{s.name}</h2>
                                            </div>
                                        ) : (
                                            hover === s.name && (
                                                <div>
                                                    <h2>{s.name}</h2>
                                                </div>
                                            )
                                        )
                                    }
                                </li>
                            </ul>
                        </SkillDiv>
                    ))}
                </SkillsDiv>
            ))
        }
        <h1>{'ETC'}</h1>
        {
            etcList.map((etc, etcidx) => (
                <SkillsDiv key={etcidx}>
                    {etc.map((s) => (
                        <SkillDiv
                            key={s.name}
                            onMouseOver={() => mouseOverHandler(s.name)}
                            onMouseLeave={mouseLeaveHandler}
                            hover={hover === s.name}
                            category={s.category}
                        >
                            <ul>
                                <li>
                                    <img src={s.img} alt={`${s.name} img`}/>
                                    {isSmallScreen ? (
                                            <div>
                                                <h2>{s.name}</h2>
                                            </div>
                                        ) : (
                                            hover === s.name && (
                                                <div>
                                                    <h2>{s.name}</h2>
                                                </div>
                                            )
                                        )
                                    }
                                </li>
                            </ul>
                        </SkillDiv>
                    ))}
                </SkillsDiv>
            ))
        }
    </SkillContainer>
  )
}

export default Skill

const SkillContainer = styled.div`
    width: 100%;
    color:#ffffff;
    background-color: #16181b;
    /* border: solid 1px #ffaaaa; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        padding-top: 30px;
        text-align: center;
        font-size: 50px;
        /* font-size: 3.3vw; */
        font-weight: 800;

        @media screen and (max-width:1023px) {
            padding-top: 60px;
            margin-top: -5px;
        }
    }
`;

const SkillsDiv = styled.div`
    /* border: solid 1px #ffaaaa; */
    height: 150px;
    gap: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SkillDiv = styled.div`
    width: ${(Props) => !Props.hover ? '100px' : Props.hover && Props.category === 'main' ? '260px' : '200px'};
    height: ${(Props) => !Props.hover ? '100px' : '130px'};
    border: solid 1px rgb(60, 60, 60, 0.4);
    padding: 20px;
    display: flex;
    background-color: #0e0e0e;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    transition: width 0.4s ease, height 0.4s ease;

    li {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 60px;
        height: 60px;
        object-fit: contain;
    }
    div {
        width: 150px;
        margin: 0 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        cursor: default;
    }
    h2 {
        font-size: 25px;
        font-weight: 900;
    }

    @media screen and (max-width:1023px) {
        width: ${(Props) => Props.category === 'main' ? '260px' : '200px'};
        height: 100px;
        
    }
`;
