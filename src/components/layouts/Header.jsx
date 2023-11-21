import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import menuIcon from '../../assets/hamburger_icon.png';
import closeIcon from '../../assets/close_icon.png';

const Header = () => {
  const menu = [
    { name : 'INTRO', start: 0 },
    { name : 'ABOUT', start: 859 },
    { name : 'SKILL', start: 1718 },
    { name : 'PROJECTS', start: 2577 },
    { name : 'CONTACT', start: 3436 },
  ]

  const [scrollY, setScrollY] = useState(0)
  const [page, setPage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getPageName = (scroll) => {
    const findPage = menu.find(({ name, start }) => scroll >= start && scroll < start + 859)
    return findPage ? findPage.name : ''
  }

  useEffect(() => {
    const initialScrollY = window.scrollY
    setPage(getPageName(initialScrollY))

    const scrollHandler = () => {
      setScrollY(window.scrollY)
      setPage(getPageName(window.scrollY))
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    } 
  }, [])

  const scrollMoveHandler = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen)
  }

  const scrollModalHandler = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
    setIsModalOpen(!isModalOpen)
  }

  return (
    <HeaderContainer>
      <HeaderMenuIconBtn onClick={modalHandler}>
        <img src={menuIcon} alt='menu img'/>
      </HeaderMenuIconBtn>
      {isModalOpen &&
          <ModalBackground>
            <ModalCloseBtn onClick={modalHandler}>
              <img src={closeIcon} alt='close img'/>
            </ModalCloseBtn>
            {menu.map(({ name, start }) => (
              <ModalMenuBtn key={name} $page={page === name} onClick={() => scrollModalHandler(start)}>
                {name}
              </ModalMenuBtn>
            ))}
          </ModalBackground>
        }
      <HeaderLogo>MinCheol</HeaderLogo>
      <HeaderDiv>
        {menu.map(({ name, start }) => (
          <HeaderBtn key={name} $page={page === name} onClick={() => scrollMoveHandler(start)}>
            {name}
          </HeaderBtn>
        ))}
      </HeaderDiv>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 50px;
  position: fixed;
  /* border: 1px solid #eaeaea; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  transition: all 0.3s ease;
  z-index: 99;

  @media screen and (max-width:1023px) {
    /* background-color: #5154f7; */
  }

  @media screen and (max-width:767px) {
    /* background-color: #c051f7; */
    justify-content: center;
  }
`;

const HeaderMenuIconBtn = styled.button`
  /* border: 1px solid #eaeaea; */
  width: 40px;
  height: 40px;
  filter: invert(100%);
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  top: 13px;
  left: 18px;
  display: none;

  img {
        max-width: 100%;
        border: 0;
        vertical-align: middle;
    }

  @media screen and (max-width:767px) {
    display: block;
  }
`;

const HeaderLogo = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const HeaderDiv = styled.div`
  display: flex;
  gap: 30px;
`;

const HeaderBtn = styled.button`
  color: #ffffff;
  position: relative;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 0;
    top: 25px;
    left: 50%;
    border-bottom: 2px solid white;
    transition: width 0.15s linear;
    transform: translateX(-50%);
  }
  &::after {
    width: ${({ $page }) => ($page ? '100%' : 0)};
  }
  &:hover::before {
    width: 100%;
  }

  @media screen and (max-width:767px) {
    display: none;
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  inset: 0;
  position: fixed;
  background-color: #000000;
`;

const ModalCloseBtn = styled.button`
  width: 25px;
  height: 25px;
  filter: invert(100%);
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 24px;

  img {
        max-width: 100%;
        border: 0;
        vertical-align: middle;
    }
`

const ModalMenuBtn = styled.button`
  width: 100%;
  height: 8%;
  top: 10%;
  /* border: 1px solid #eaeaea; */
  color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
`;