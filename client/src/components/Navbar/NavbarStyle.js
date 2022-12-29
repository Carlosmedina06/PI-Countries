import styled from 'styled-components'

export const StyleNavbar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem 1.875rem;
    margin: 50px auto;
    max-width: 75rem;
    min-height: 50px;
    width: 70%;
    background: #FFF;
    border-radius: 10px;
    color: #07484a;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
  
    }
    a,
    div {
      display: flex;
      font-weight: bold;
      gap: 1rem;
      align-items: center;
      color: #07484a;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
`
