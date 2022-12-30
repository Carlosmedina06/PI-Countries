import styled from 'styled-components'

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  label {
    font-weight: bold;
    color: #07484a;
  }
  input,
  select {
    width: 100%;
    height: 40px;
    text-align: center;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #07484a;
    transition: 0.3s ease;
    margin: 15px 0;
  }
  select:hover {
    background-color: #07484a;
    color: #f3f3f4;
    cursor: pointer;
  }
  p {
    color: #fff;
    font-size: 16px;
    background: red;
    border-radius: 10px;
    padding: 5px 20px;
    transition: all 0.3s ease-in-out;
  }
`

export const BtnSubmit = styled.button`
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  color: #07484a;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 30px 0 0 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #07484a;
    color: #fff;
  }
`
export const CountryBadge = styled.div`
  display: flex;
  width: 80px;
  height: 30px;
  background: #07484a;
  color: #fff;
  box-shadow: 0px 4px 50px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 0 0;
  div{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`
