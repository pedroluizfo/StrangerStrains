import { useState } from 'react';
import React from 'react';
import { ethers, BigNumber } from 'ethers';
import StrangerStrains from './StrangerStrains.json';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Pote0 from './assets/icons/POTE 0.svg';
import Pote1 from './assets/icons/POTE 1.svg';
import Pote2 from './assets/icons/POTE 2.svg';
import Pote3 from './assets/icons/POTE 3.svg';
import BigComponent from './BigComponent';
import './responsive.css'
const StrangerStrainsNFTAddress = '0x5DA547a9F49aF80c435ADb7c7eaa0AbbF480A2b6';

const MainMint = ({ accounts, setAccounts }) => {
  const [imageSrc, setImageSrc] = useState(Pote0);
  const [mintAmount, setMintAmount] = useState(1);
  const [count, setCount] = useState(1);
  const isConnected = Boolean(accounts[0]);

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

<Flex justify="center" align="center" height="100vh" paddingBottom="150px">
<BigComponent></BigComponent>
<Box width="400px" mr='67px'><img src={Pote0} ></img>
       
                    <Text
                   marginTop="10px"
                   fontSize="30px"
                   letterSpacing="-5.5%"
                   fontFamily="inherit"
                   color="#83DD3C"
                   >You must be connected to Mint</Text>
   </Box>
   </Flex>
)
}else{
    return (

                <Flex justify="center" align="center" height="100vh" paddingBottom="150px">

<BigComponent></BigComponent>
                            <Box className="mint-container" width="400px" mr='67px'>
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
                                    marginTop="10px"
                                    onClick = {handleDecrement}>-</Button> 
            
                                    <Input
                                    readOnly
                                    fontFamily="inherit"
                                    width="100px"
                                    height="40px"
                                    textAlign="center"
                                    paddingLeft="19px"
                                    marginTop="10px"
                                     type ="number" value={mintAmount} />
            
                                    <Button
                                    backgroundColor="#83DD3C"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #0F0F0F"
                                    color="black"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    marginTop="10px"
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
                                    marginTop="10px"
                                    onClick = {handleMint}>Mint now</Button>
            
            
                                </div>
                        
                        </Box>
                    </Flex>
                  
                );
}


};

export default MainMint;



