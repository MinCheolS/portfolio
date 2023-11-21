import STUDYHUB from '../../assets/STUDY HUB.png';
import PORTFOLIO from '../../assets/PORTFOLIO.png';

export const projects = [
    {
        id: 1,
        img: PORTFOLIO,
        name: 'PORTFOLIO',
        team: '개인프로젝트',
        period: '23.11.06 ~ 23.11.20',
        skills: '#React,#Styled-Components,#반응형웹',
        links: {
            사이트바로가기: 1,
            GitHub: 1,
        },
        description: '포트폴리오 용도로 제작한 웹사이트입니다. \n React, Styled-Components를 사용하여 개발했으며, 반응형 웹으로 제작하였습니다.',
    },
    {
        id: 2,
        img: STUDYHUB,
        name: 'STUDY HUB(스터브)',
        team: '팀프로젝트 (FE 3, BE 3, DE 1)',
        period: '23.05.19 ~ 23.06.30',
        skills: '#Javascript,#React,#Web RTC,#Styled-Components,#React Query',
        links: {
            GitHub: 'https://github.com/Study-Hub-09/StudyHub_FE',
        },
        description: '다같이 모여 공부를 할 수 있는 온라인 스터디 플랫폼입니다. \n Web RTC를 이용해 스터디룸, SideBar, 내 공부현황 페이지 등을 담당했습니다.',
    },
]