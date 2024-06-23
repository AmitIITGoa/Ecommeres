import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';


const categories1 = [
	{ id: 1, name: 'T shirt ' , link : 'https://www.teez.in/cdn/shop/products/Link-Data-T-Shirt-3_large.jpg?v=1583558866' },
	{ id: 2, name: 'Pant ' , link : 'https://www.teez.in/cdn/shop/products/Data-Mining--Joggers-For-Men-Navy_large.jpg?v=1621071874'},
	{ id: 3, name: 'Coding T Shirt  ' , link : 'https://www.teez.in/cdn/shop/products/1_08a632a4-2cba-4848-bc73-e7963b69c8d7_large.jpg?v=1606995785'},
];

const electrical_gayjet = [
	{ id: 1, name: 'head phone  ' , link : 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674045672/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239033_0_aq6dfy.png?tr=w-640' },
	{ id: 2, name: 'smart phone  ' , link : 'https://media.istockphoto.com/id/1184498808/photo/iphone-11-and-11-pro-mobile-smartphones-in-original-packages.jpg?s=2048x2048&w=is&k=20&c=ryV1gL2CHPPJZvMqwl6FZmG44HegJbr6cJW2sCgJDDg='},
	{ id: 3, name: 'temp ' , link : 'https://www.teez.in/cdn/shop/products/1_08a632a4-2cba-4848-bc73-e7963b69c8d7_large.jpg?v=1606995785'},
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Category = () => { // Assuming categories is passed as a prop
return (
	<div>
	<Container>
		{categories1.map((item) => (
			<CategoryItem key={item.name} item={item} />
		))}
	</Container>
	<Container>
		{electrical_gayjet.map((item) => (
			<CategoryItem key={item.name} item={item} />
		))}
	</Container>
	</div>
);
};

export default Category;
