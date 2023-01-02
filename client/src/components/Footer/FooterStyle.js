import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #07484a;
  margin: 0 40px;
`

export const Footerheader = styled.div`
  color: #07484a;
  letter-spacing: 2.5px;
  text-align: center;
`

export const FooterContent = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 10px;
  svg {
    color: #07484a;
  }
  p {
    letter-spacing: 2.5px;
    text-decoration: underline;
    font-size: 12px;
  }
`