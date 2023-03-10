import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: 30px;
  p {
    background: #07484a;;
    border-radius: 10px;
    color: #fff;
    box-shadow: 0px 4px 50px rgb(0 0 0 / 10%);
    border: solid 2px #07484a;
    padding: 10px 20px;
    user-select: none;
  }
`

export const BtnPag = styled.button`
 color: #07484a;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  color: #07484a;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #07484a;
    color: #fff;
  }
`
