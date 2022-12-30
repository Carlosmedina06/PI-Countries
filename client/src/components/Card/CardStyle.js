import styled from 'styled-components'

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
  min-height: 20rem;
  margin: 1rem auto;
  padding: 1rem;
  width: 100%;
  align-items: center;
  text-align: center;
  background: #fff;
  color: #07484a;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 2px solid #fff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s linear 0s;
  &:hover{
    border: 2px solid #07484a;
  }
  img {
    max-width: 200px;
    max-height: 150px;
  }
`
