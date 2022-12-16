import styled from 'styled-components'

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  max-height: 20rem;
  box-shadow: rgb(160 174 192 / 60%) 0px 4px 6px;
  margin: 1rem;
  width: 100%;
  margin-inline: auto;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.5s linear 0s;
  padding: 40px 10px;
  cursor: pointer;
  align-items: center;
  text-align: center;
  img {
    width: 200px;
    height: 150px;
  }
`
