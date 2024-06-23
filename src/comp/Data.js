import React, { useEffect, useState } from 'react';
import { publicRequest } from '../home/RequestMethod';

export let popularProducts ;



const Data = () => {
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('http://localhost:5000/product/all');
        popularProducts = await  res.data;
        // console.log(popularProducts);
        console.log("Data fetched successfully");
        console.log(popularProducts)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProduct();
  }, []);

  return null;
};

export default Data;
