import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Pote0 from './assets/icons/POTE 0.svg';
import sideIcons from './assets/icons/sideIcons.svg';
import rightIcons from './assets/icons/ELEMENTOS DIREITA.svg';


const BigComponent = () => {




  return (
    

    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
    <Box width="40px">
            <Text display= 'block' text-align ='justify' position= 'absolute' bottom= '360px' left= '200px' color="#83DD3C">Buy weed  (and <br></br>resell) without <br></br>any trouble</Text>
            </Box>
            <Box>
            <Text position= 'absolute' bottom= '240px' left= '300px' color="#83DD3C" >EACH BATCH OF<br></br> SPECIMENS IS UNIQUE <br></br>AND WILL NEVER BE <br></br>RECULTURED.</Text>
            </Box>
            <Box>
            <Text position= 'absolute' bottom= '120px' left= '200px' color="#83DD3C" >OUR PROJECT GOES BEYOND <br></br>THE SALE OF ASSETS...<br></br> WE CULTIVATE A PURPOSE.</Text>
          </Box>
        <Box>
        <div>
            
            <img src={sideIcons} style={{ position: 'absolute', bottom: '-40px', left: '20px' }} />
            <img src={rightIcons} style={{ position: 'absolute', bottom: '-40px', right: '20px' }} />
          </div>
        </Box>

        <Box width="20px">
              <Text position='absolute' bottom='360px' right='200px' color="#83DD3C" >TRIPLE "A" ART... <br></br>QUADRUPLE "A" <br></br>HUMOR.</Text>
              <Text position='absolute' bottom='240px' right='300px' color="#83DD3C" >WE DO NOT RECOMMEND <br></br>CONSUMPTION <br></br>WITHOUT THE ADVICE <br></br>OF A SPECIALIST.</Text>
              <Text position='absolute' bottom='120px' right='200px' color="#83DD3C" >LABEL CONTAINING <br></br>STRANGER STRAINS <br></br>INFORMATION.</Text>
            </Box>
</Flex>
  );      
};
export default BigComponent;
