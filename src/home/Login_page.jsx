import React from 'react'
import Navbar from '../comp/Navbar'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`



const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const Login_page = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Sign IN</Title>
          <Form>
            
            <Input placeholder="Username / Email ID " />
         
            <Input type="password" placeholder="Password" />
            <Button>Sign In</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Login_page
