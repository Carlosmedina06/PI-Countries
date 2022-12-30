import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  background: #fff;
  color: #07484a;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`

export const LogoContainer = styled.div`
  a,
  div {
    display: flex;
    font-weight: bold;
    gap: 1rem;
    padding: 5px 10px;
    align-items: center;
    color: #07484a;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: #fff;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: absolute;
    left: ${({ open }) => (open ? '0' : '-110%')}; //Import
    margin: 20px 30px;
    top: 85px;
    padding-left: 0;
    width: 70%;
    height: 20vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`

export const MenuItem = styled.li`
  height: 100%;
  color: @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 10px;
  transition: 0.5s all ease;
  a {
    color: #07484a;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    &:hover {
      color: #fff;
      background-color: #07484a;
      border-radius: 10px;
      transition: 0.5s all ease;
      padding: 10px 20px;
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #07484a;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #07484a;
      margin-right: 0.5rem;
    }
  }
`
