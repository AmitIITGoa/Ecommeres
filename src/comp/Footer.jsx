import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
`

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  align-items: center;
  justify-content: space-between;
`

const Input = styled.input`
  flex: 8;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  outline: none;
`

const Button = styled.button`
  flex: 2;
  padding: 10px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f5f;
  }
`

const FooterContainer = styled.footer`
  margin-top: 40px;
  padding: 20px;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-size: 14px;
`

const Img = styled.div`
  height: 30px;
  width: 30px;
  flex: 1;
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 5px;
  }
`

const Footer = () => {
  return (
    <div>
      <Container>
        <Title>Newsletters</Title>
        <Description>Get timely updates here</Description>
        <InputContainer>
          <Input placeholder="Enter your email" />
          <Button>Send</Button>
        </InputContainer>
      </Container>
      <FooterContainer>
        &copy; 2024 Your Company. All rights reserved.
        <Img>
          <img src="https://i.pinimg.com/736x/bc/21/ae/bc21ae74062c452722b76529d63560bf.jpg" alt="Logo 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0Ckvt5E2HZd_2ctuaL4Q43g-xTjGlaGJFQ&s" alt="Logo 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1QZSxB9ZCw8ByTLWnFWEAdfv5L4qODshlQ&s" alt="Logo 3" />
        </Img>
        <div>Follow us on</div>
        <div>Contact us: +91 8983235362</div>
      </FooterContainer>
    </div>
  )
}

export default Footer
