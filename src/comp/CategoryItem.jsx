import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column; 
	padding: 20px;
	justify-content: space-between;
	height: 50%;
	width: 50;
` 
const Image = styled.img`
	width: 75%; 
	height: auto; 
	object-fit: cover;
`

const ItemName = styled.h2`
	margin-top: 10px; 
	font-size: 20px;
	font-weight: 500;
	color :  black;
	font-family: 'Montserrat', sans-serif ;
	text-align: center;
`

const Button = styled.button`
	padding: 5px;
	font-size: 14px;
	background-color: transparent;
	cursor: pointer;
	border: none;
	color :  blue;
`

const CategoryItem = ({item}) => {
	return (
		<Container>
			<Image src={item.link} alt="" />
			<Button><ItemName>{item.name}</ItemName></Button>
		</Container>
	)
}

export default CategoryItem
