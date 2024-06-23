import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../comp/Navbar';
import Products from '../comp/Products';
import Footer from '../comp/Footer';
import { useLocation } from 'react-router';
import { publicRequest } from '../home/RequestMethod';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const FilterItem = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({ color: "All", size: "All" });
  const [sort, setSort] = useState("newest");
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest.get('http://localhost:5000/product/all');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: value,
    }));
  };

  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter by Color:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>Color</Option>
            <Option>All</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <FilterText>Filter by Size:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>Size</Option>
            <Option>All</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (low to high)</Option>
            <Option value="desc">Price (high to low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} products={products} />
      <Footer />
    </Container>
  );
};

export default FilterItem;
