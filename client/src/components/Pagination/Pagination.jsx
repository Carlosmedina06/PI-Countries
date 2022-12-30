import React from 'react'
import { BtnPag, Container } from './PaginationStyle'

const Pagination = ({ prevPage, nextPage, totalPages}) => {
  return (
    <Container>
        <BtnPag onClick={prevPage}>⟵ prev page</BtnPag>
        <p>{totalPages}</p>
        <BtnPag onClick={nextPage}>next page →</BtnPag>
    </Container>
  )
}

export default Pagination