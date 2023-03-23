import React from 'react';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import Pote0 from './assets/icons/POTE 0.svg';
import sideIcons from './assets/icons/sideIcons.svg';
import rightIcons from './assets/icons/ELEMENTOS DIREITA.svg';

const BigComponent = () => {
  const [isLargerThan1360] = useMediaQuery("(min-width: 1361px)");

  if (!isLargerThan1360) {
    return null; // hide the component
  }

  return (
    <Flex justify="center" align="center" max-height="100vh" paddingBottom="150px">
      <Box width={{ base: "100%", md: "40%" }}>
        <Text display='block' style={{ textAlign: 'right' }} position='absolute' bottom='420px' left='200px' color="#83DD3C">Buy weed  (and <br></br>resell) without <br></br>any trouble</Text>
        <Text style={{ textAlign: 'right' }} position='absolute' bottom='300px' left='300px' color="#83DD3C" >EACH BATCH OF<br></br> SPECIMENS IS UNIQUE <br></br>AND WILL NEVER BE <br></br>RECULTURED.</Text>
        <Text style={{ textAlign: 'right' }} position='absolute' bottom='180px' left='200px' color="#83DD3C" >OUR PROJECT GOES BEYOND <br></br>THE SALE OF ASSETS...<br></br> WE CULTIVATE A PURPOSE.</Text>
      </Box>
      <Box width={{ base: "0", md: "60%" }}>
        <div>
          <img src={sideIcons} style={{ position: 'absolute', bottom: '0px', left: '100px' }} />
          <img src={rightIcons} style={{ position: 'absolute', bottom: '0px', right: '100px' }} />
        </div>
        <Box display={{ base: "none", md: "block" }} width="20px">
          <Text style={{ textAlign: 'left' }} position='absolute' bottom='420px' right='200px' color="#83DD3C" >TRIPLE "A" ART... <br></br>QUADRUPLE "A" <br></br>HUMOR.</Text>
          <Text style={{ textAlign: 'left' }} position='absolute' bottom='300px' right='300px' color="#83DD3C" >WE DO NOT RECOMMEND <br></br>CONSUMPTION <br></br>WITHOUT THE ADVICE <br></br>OF A SPECIALIST.</Text>
          <Text style={{ textAlign: 'left' }} position='absolute' bottom='180px' right='200px' color="#83DD3C" >LABEL CONTAINING <br></br>STRANGER STRAINS <br></br>INFORMATION.</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default BigComponent;
