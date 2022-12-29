import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 2em;
`
export const CartaContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Filtros = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
`
export const BtnReset = styled.button`
  background: #fff;
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


