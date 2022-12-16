import styled from 'styled-components'

export const StyleNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem 1.875rem;
    background-color: #fff;
    margin: 1.875rem;
    max-width: 75rem;
    min-height: 3.125rem;
    width: 100%;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    a,
    div {
      font-weight: bold;
      margin: 0 0.625rem;
      display: flex;
      align-items: center;
      gap: 0.625rem;
      font-weight: bold;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    button {
      display: flex;
      border: 1px solid #fff;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.5s linear 0s;
      cursor: pointer;
      svg {
        width: 1.875rem;
      }
      &:hover {
        background: #fcf2f2;
        border: 1px solid #fcf2f2;
      }
    }
  }
`
