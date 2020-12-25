import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 25rem;
  height:40rem;
  border: 1px solid gray;
  padding:1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Title = styled.h1`
  text-align: center;
`

type Props = {
  title?:string;
  children?: ReactNode
}

const Layout:React.FC<Props> = ({ children ,title}) => (
  <StyledWrapper>
    {title && <Title>{title}</Title>}
    {children}
  </StyledWrapper>
)

export default Layout
