import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../comp/Navbar';
import Footer from '../comp/Footer';
import { useLocation } from 'react-router';
import { publicRequest } from './RequestMethod';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin-bottom: 20px;
`;

const Price = styled.h3`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 10px;
  justify-content: space-between;

  &:hover {
    background-color: #555;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 50%;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
`;

const FilterSizeOption = styled.option`
  margin: 5px;
`;

const ProductPage = () => {
  const location = useLocation();
  const arr = location.pathname.split('/');
  const id = arr[arr.length - 1];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`http://localhost:5000/product/find/${id}`);
        setProduct(res.data);
        const res2 = await publicRequest.get('http://localhost:5000/product/all');
        console.log(res2.data);
      } catch (error) {
        console.error('Failed to fetch product data:', error);
      }
    };
    getProduct();
  }, [id]);

  const handlerop = async (event) => {
    event.preventDefault();
    try {
      console.log("Runned handlerop");
      await publicRequest.post('http://localhost:5000/cart/', {
        productId: product._id,
        quantity: 2,
        name: product.title,
        img: product.img,
        color: product.colors,
        size: product.sizes,
        price: product.price,
        userid: product._id 
      });

      console.log('Product added to cart successfully!');
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} alt={product.title} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>Price: ${product.price}</Price>

            <FilterContainer>
              {product.colors && product.colors.length > 0 && (
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  {product.colors.map((color) => (
                    <FilterColor key={color} color={color} />
                  ))}
                </Filter>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    {product.sizes.map((size) => (
                      <FilterSizeOption key={size}>{size}</FilterSizeOption>
                    ))}
                  </FilterSize>
                </Filter>
              )}
            </FilterContainer>

            <ButtonContainer>
              <Button>SHOP NOW</Button>
              <a  href="/cart/" onClick={handlerop}><Button >ADD TO CART</Button></a>
              <a href="/cart/">
              <Button >View Cart</Button></a>
            </ButtonContainer>
          </InfoContainer>
        </Wrapper>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default ProductPage;
