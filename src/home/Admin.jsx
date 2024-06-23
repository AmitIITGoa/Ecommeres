import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../comp/Navbar';
import Footer from '../comp/Footer';
import { publicRequest } from './RequestMethod'; // Assuming publicRequest is exported as named export
import { Description } from '@headlessui/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;



const Admin = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img: '',
    categories: [],
    size: '',
    color: '',
    price: 0,
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      console.log('Running handleSubmit');
      await publicRequest.post('http://localhost:5000/product/', formData);

      console.log('Product added successfully!');
	 document.getElementById("description").innerHTML = "Product added successfully!";
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
	<div>
	<Navbar />
    <Container>
      
      <Form onSubmit={handleSubmit}>
        <Title>Add New Product</Title>

        <FormGroup>
          <Label>Title</Label>
          <InputField
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <InputField
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </FormGroup>

        <FormGroup>
          <Label>Image URL</Label>
          <InputField
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </FormGroup>

        <FormGroup>
          <Label>Categories (comma-separated)</Label>
          <InputField
            type="text"
            name="categories"
            value={formData.categories.join(',')}
            onChange={(e) => setFormData({ ...formData, categories: e.target.value.split(',') })}
            placeholder="Enter categories"
          />
        </FormGroup>

        <FormGroup>
          <Label>Size</Label>
          <InputField
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder="Enter size"
          />
        </FormGroup>

        <FormGroup>
          <Label>Color</Label>
          <InputField
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Enter color"
          />
        </FormGroup>

        <FormGroup>
          <Label>Price</Label>
          <InputField
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </FormGroup>

        <FormGroup>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
            />
            In Stock
          </CheckboxLabel>
        </FormGroup>

        <Button type="submit">Create</Button>
		<div id='description'> </div>
      </Form>
     
    </Container>
	<Footer />
	</div>
  );
};

export default Admin;
