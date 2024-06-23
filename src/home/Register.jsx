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

const Agreement = styled.input.attrs({ type: 'checkbox' })`
  margin-bottom: 10px;
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

const Register = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Create an account</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
			Terms and conditions read  <Agreement />
            <Button>Register</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
