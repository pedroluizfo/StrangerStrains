import { useState } from 'react';
import React from 'react';
import { ethers, BigNumber } from 'ethers';
import StrangerStrains from './StrangerStrains.json';
import { Box, Button, Flex, Input, Text, useMediaQuery } from '@chakra-ui/react';
import Pote0 from './assets/icons/pote 0.svg';
import Pote1 from './assets/icons/pote 1.svg';
import Pote2 from './assets/icons/pote 2.svg';
import Pote3 from './assets/icons/pote 3.svg';
import pote0 from './assets/icons/POTE0.svg';
import pote1 from './assets/icons/POTE1.svg';
import pote2 from './assets/icons/POTE2.svg';
import pote3 from './assets/icons/POTE3.svg';

import BigComponent from './BigComponent';
import './responsive.css'
const StrangerStrainsNFTAddress = '0x804fAeEC0ce2712c4C954a8C4d7b6fd21B7C749F';

const MainMint = ({ accounts, setAccounts }) => {
  const [imageSrc, setImageSrc] = useState(pote0);
  const [mintAmount, setMintAmount] = useState(1);
  const [count, setCount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  const [isLargerThan1360] = useMediaQuery("(min-width: 1361px)");
  const centerTextValues = ["let's", "fucking", "grow"];



  const images = [Pote1, Pote2, Pote3];
  


  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
    setCount(count - 1);

  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
    setCount(count + 1);

  };

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(StrangerStrainsNFTAddress, StrangerStrains.abi, signer);
  
      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log('response: ', response);
 // update the image source
      } catch (err) {
        console.log('error', err);
      }
    }
    setCount(1);
  }

  
if(!isConnected){
return(

<Flex justify="center" align="center" height="85vh" paddingBottom="240px">
<BigComponent></BigComponent>
<Box position="absolute" width="80%" height="auto"><img src={Pote0}></img>
       
                    <Text
                   marginTop="10px"
                   fontSize="20px"
                   letterSpacing="-5.5%"
                   fontFamily="inherit"
                   color="#83DD3C"
                   >You must be connected to Mint</Text>
   </Box>
   </Flex>
)
}else{
    return (

                <Flex justify="center" align="center" height="85vh" paddingBottom="240px">

                            <BigComponent></BigComponent>
                            <Box className="mint-container" width="80%" height="auto">
                                <div>
                                    <img src={images[mintAmount-1]}/>
            
                                    <Flex justify="center" align="center">
                                    <Button
                                    backgroundColor="#83DD3C"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #0F0F0F"
                                    color="black"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    marginTop="0px"
                                    onClick = {handleDecrement}>-</Button> 
            
                                   <Input
                                  readOnly
                                  fontFamily="inherit"
                                  width="100px"
                                  height="40px"
                                  textAlign="center"
                                  paddingLeft="0px"
                                  marginTop="0px"
                                  type="string"
                                  value={centerTextValues[mintAmount-1]}
                                  />
            
                                    <Button
                                    backgroundColor="#83DD3C"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #0F0F0F"
                                    color="black"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    marginTop="0px"
                                    onClick = {handleIncrement}>+</Button>
                                    </Flex>
                                       <Button
                                    backgroundColor="#83DD3C"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #0F0F0F"
                                    color="black"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    marginTop="0px"
                                    onClick = {handleMint}>Mint now</Button>
            
            
                                </div>
                        
                        </Box>
                    </Flex>
                  
                );
}


};

export default MainMint;
