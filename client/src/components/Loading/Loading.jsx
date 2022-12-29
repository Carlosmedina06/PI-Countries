import React from 'react'
import { Container } from './LoadingStyle'

const Loading = () => {
  return (
    <Container class="dot-wave">
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
</Container>
  )
}

export default Loading