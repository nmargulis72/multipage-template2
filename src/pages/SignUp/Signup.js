import React from 'react';
import { homeObjFour, } from './Data';
import { InfoSection, Pricing } from '../../components';


const Signup = () => {
  return (
    <>
   
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default Signup;