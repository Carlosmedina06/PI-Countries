import styled from 'styled-components'

export const SearchStyle = styled.div`
width: 100%;
input {
 width: 100%;
 height: 40px;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 background-color: #f3f3f4;
 color: #07484a;
 transition: .3s ease;
}


input::placeholder {
 color: #9e9ea7;
 padding: 0.5rem;
}

input:focus, input:hover {
 outline: none;
 background-color: #fff;
 color: #07484a;
 box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
`