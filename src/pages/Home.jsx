import React from 'react'
import Greetings from '../components/Greetings/Greetings';
import { useEffect, useState } from 'react';
import Enquiry from '../components/Enquiry/Enquiry';
import WhyToChoose from '../components/WhyToChoose/WhyToChoose';
import WorkFlowTaxu from '../components/WorkFlowTaxu/WorkFlowTaxu';
import InterestingFact from '../components/InterestingFact/InterestingFact';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
const Home = ({check}) => {
    
  return (
    <>
      <Enquiry/>
      <WhatWeDo/>
      <WhyToChoose/>
      <WorkFlowTaxu/>
      <InterestingFact/>
    </>
    )
}

export default Home