import React from 'react';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import sideIcons from './assets/icons/sideIcons.svg';
import rightIcons from './assets/icons/ELEMENTOS DIREITA.svg';
import OneLeft from './assets/icons/1 DA ESQUERDA.svg'
import TwoLeft from './assets/icons/2 DA ESQUERDA.svg'
import threeLeft from './assets/icons/3 DA ESQUERDA.svg'

const BigComponent = () => {
  const [isLargerThan1360] = useMediaQuery("(min-width: 1361px)");

  if (!isLargerThan1360) {
    return(
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, textAlign: "center" }}>
      <Box display={{ base: "none", md: "block" }} width="100%">
    <Text fontSize="12px" color="#83DD3C">THE STRANGER STRAIN'S PROJECT HAS ALL RIGHTS RESERVED FOLLOW US ON OUR SOCIAL NETWORKS TO KEEP UP WITH THE NEWS AND PROMOTE ADVANCES IN OUR LABORATORY'S RESEARCH</Text>
  </Box>
  </div>
    ); // hide the component
  }

  return (
    <Flex justify="center" align="center" max-height="100vh" paddingBottom="150px">
     
      <Box width={{ base: "0", md: "60%" }}>
        <div>
          <img src={sideIcons} style={{ position: 'absolute', bottom: '100px', left: '140px' }} />
          <img src={rightIcons} style={{ position: 'absolute', bottom: '100px', right: '75px' }} />
        </div>
        </Box>
       
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, textAlign: "center" }}>
  <Box display={{ base: "none", md: "block" }} width="100%">
    <Text fontSize="12px" color="#83DD3C">THE STRANGER STRAIN'S PROJECT HAS ALL RIGHTS RESERVED FOLLOW US ON OUR SOCIAL NETWORKS TO KEEP UP WITH THE NEWS AND PROMOTE ADVANCES IN OUR LABORATORY'S RESEARCH</Text>
  </Box>
</div>

    </Flex>
    
  );
};

export default BigComponent;
