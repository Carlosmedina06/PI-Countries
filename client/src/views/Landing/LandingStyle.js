import styled from 'styled-components'
import image from '../../assets/flags.png'

export const LandingStyle = styled.div`
  display: flex;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: absolute;
  top: 20%;
  left: 60%;
  padding: 0 30px;
  transform: translateY(-50%);
`
export const LandingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 50px;
`
export const BtnLanding = styled.button`
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 50px;
  border-radius: 10px;
  color: #07484a;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #07484a;
    color: #fff;
  }
`