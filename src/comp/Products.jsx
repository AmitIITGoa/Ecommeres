import React from 'react'; 
import { popularProducts } from './Data';
import styled from 'styled-components'; 
import { json } from 'react-router-dom';




const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

const Pro = styled.div`

  margin: 10px;
`;

const Products = ({ products, cat, filters, sort }) => {
	// Apply filtering and sorting logic here if necessary
  const filteredProducts = products.filter(product => {
    // Example filter logic, modify according to your needs
    let isValid = true;
    if (filters.color !== 'All' && product.color !== filters.color) {
      isValid = false;
    }
    if (filters.size !== 'All' && product.size !== filters.size) {
      isValid = false;
    }
    return isValid;
  });

  // Example sorting logic
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === 'asc') {
      return a.price - b.price;
    } else if (sort === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  
  return (
    <Container>
      {sortedProducts.map((product) => (
		<Pro>
        <div key={product.id} className="group relative">
          <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <a href={`/product/${product.id}`}>
              <img
                src={product.img}
                
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              
            </a>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={`/product/${product._id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
          {/* Buy Button */}
          <div className="mt-2">
            <a href={`/product/${product.id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Buy
            </a>
          </div>
        </div>
		</Pro>
      ))}
	  
    </Container>
  );
};

export default Products;


