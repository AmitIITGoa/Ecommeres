import React, { useEffect, useState } from 'react';
import Navbar from '../comp/Navbar';
import styled from 'styled-components';
import Footer from '../comp/Footer';
import { publicRequest } from './RequestMethod';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-right: 10px;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid grey;
  padding: 10px;
  background-color: #f5f4f4;
  border-radius: 5px;
`;

const TopBottom = styled.button`
  padding: 10px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005f5f;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  height: 40px;
`;

const TopText = styled.h1``;

const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  border: 1px solid #ccc;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 30px;
`;

const ProductName = styled.h1`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const ProductId = styled.p`
  font-size: 12px;
  color: #777;
  margin-bottom: 5px;
`;

const ProductColor = styled.p`
  font-size: 12px;
  color: #777;
  margin-bottom: 5px;
`;

const ProductSize = styled.p`
  font-size: 12px;
  color: #777;
  margin-bottom: 5px;
`;

const PricesDetail = styled.div`
  font-size: 14px;
  color: #333;
`;

const Bat = styled.button`
  margin: 5px;
  padding: 8px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005f5f;
  }
`;

const Summ = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 14px;
`;

const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await publicRequest.get('http://localhost:5000/cart/find');
        setCart(res.data); // Assuming the response structure is { data: { products: [] } }
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleramit = async (product, event) => {
    event.preventDefault(); // Prevent default behavior of the link
    total -=  product.price;
    try {
      console.log("Runned handlerop");
      await publicRequest.delete('http://localhost:5000/cart/' + product._id);

      console.log('Product removed from cart successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Failed to remove product from cart:', error);
    }
  };
  let  total = 0 ;
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopBottom>Continue Shopping</TopBottom>
          <TopBottom>Checkout Now</TopBottom>
        </Top>
        <Bottom>
          <CartContainer>
            <TopText>Your Shopping List</TopText>
            {cart.map((product) => {total = total +  Number(product.price)})}
            {cart.map((product) => (
              <ProductDetail key={product.productId}>
                <ProductImage src={product.img} alt={product.name} />
                <Details>
                  <ProductName>{product.name}</ProductName>
                  <ProductId>ID: {product.productId}</ProductId>
                  <ProductColor>Color: {product.color}</ProductColor>
                  <ProductSize>Size: {product.size}</ProductSize>
                  <PricesDetail>Price: {product.price}</PricesDetail>
                  
                  <div>
                    <Bat>Buy</Bat>
                    <Bat onClick={(event) => handleramit(product, event)}>Remove</Bat>
                  </div>
                </Details>
                <Summ>Summary: Good Discount</Summ>
              </ProductDetail>
            ))}
          </CartContainer>
          <OrderContainer>
            <Order>
              <Div>
                <Summ>Order Summary</Summ>
                <Summ>Discount: 10%</Summ>
                <Summ>Shipping Charge: $10</Summ>
                <Summ>Total: $ {total}</Summ>
              </Div>
              <Bat>Place Order</Bat>
            </Order>
          </OrderContainer>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartPage;
