import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  font-weight: bold;
  color: yellow;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Lang = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: black;
  margin-right: 20px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Image = styled.img`
  width: 30px;
  height: auto;
  margin-left: 20px;
`;

const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-right: 20px;
`;

const StyledButton = styled.button`
  background-color: yellow;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    background-color: orange;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-right: 20px;
  border-radius: 5px;
  border: none;
`;

const MediumButton = styled(StyledButton)`
  padding: 8px 16px;
`;

function Navbar() {
  const handlerIN = () => {
    console.log('hello');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <H1>Search</H1>
          <Lang>
            <SearchInput type="text" placeholder="Search the item" />
          </Lang>
          <MediumButton><a href="/">Home</a></MediumButton>
          <MediumButton><a href="/admin">Admin</a></MediumButton>
        </Left>
        
        <Center>Shopping Site</Center>

        <Right>
          <MediumButton>
            <a href="/login">Log In</a>
          </MediumButton>
          <MediumButton>
            <a href="/register">Register</a>
          </MediumButton>

          <MenuItem></MenuItem>
          <button>
            <a href="/cart">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS47hFiPsE4IgeljsqZ48UUrkgL61Po30dtNUZqjYPA&s" alt="Cart" />
            </a>
          </button>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
