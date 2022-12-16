import styled from 'styled-components'

export const StyleCountryDetail = styled.div`
  display: flex;
  text-align: center;
  gap: 30px;
  width: 90%;
  padding: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`
export const StyleDetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  padding: 25px;
`
export const NotFound = styled.p`
  background-color: #ce1226;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 0.375rem;
`
export const ImgContainer = styled.div`
  img {
    max-width: 100%;
  }
`
export const Found = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  text-transform: capitalize;
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  border-radius: 0.375rem;
  text-align: center;
  gap: 10px;
  padding: 20px;
  max-width: 350px;
  min-width: 350px;
`
