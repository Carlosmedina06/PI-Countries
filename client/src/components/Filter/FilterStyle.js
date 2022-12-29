import styled from 'styled-components'

export const StyledFiltro = styled.div`
  display: flex;
  width: 40%;
  height: 50px;
  align-items: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 10px;
  color: #07484a;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px 50px;
  h4 {
    color: #07484a;
  }
  select {
    width: 100%;
    height: 30px;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #07484a;
    transition: 0.3s ease;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #07484a;
      color: #f3f3f4;
    }
  }
`
