import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, } from './Data';
import { InfoSection, } from '../../components';


const Products = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
  
    </>
  )
}

export default Products;