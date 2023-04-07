import React from 'react'
import { Box, Button, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react';
import Logo from './assets/icons/LogoStrains.svg';
import './responsive.css'

const NavBar = ({ accounts, setAccounts }) => {
const isConnected = Boolean(accounts[0]);

const [isLargerThan1360] = useMediaQuery("(min-width: 1361px)");

if (!isLargerThan1360) {
  return(
    <Flex>
    <Image src={Logo} alt="Logo" width="20%" height="auto"/>
    
     {isConnected ? (
      <Box color="#83DD3C" margin="0 30px">Connected</Box>
  ) : (

      <Button
          backgroundColor="#83DD3C"
          borderRadius="5px"
          color="green"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          onClick={connectAccount}>Connect</Button>

  )}

</Flex>

  )
}


async function connectAccount() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        setAccounts(accounts);
    }
}

return (
    <Flex
        direction={['column', 'column', 'row', 'row']}
        justify="space-between"
        align="center"
        padding="30px"
        >
        {/* Left Side - Social Media Icons */}

            <Link
                href='https://www.instagram.com/strangerstrains.s2/'
                target='_blank'
                style={{ textDecoration: 'none' }}
            >
                <div style={{ color: '#83DD3C' }}>Insta</div>
            </Link>

            <Link
                href='https://twitter.com/StrainsS2'
                target='_blank'
                style={{ textDecoration:'none' }}
              >
                <div style={{ color: '#83DD3C' }}>Twitter</div>
            </Link>

            <Link
                href='https://discord.gg/ZD9U9aj3ja'
                target='_blank'
                style={{ textDecoration: 'none' }}
              >
                <div style={{ color: '#83DD3C' }}>Discord</div>
            </Link>
      
        {/* Middle - Logo */}
       
          <Image src={Logo} alt="Logo" width="20%" height="auto"/>
      

        {/* Right Side - Sections and connect */}
     

            <Link
                margin="0 30px"
                href='https://strangerstrains.xyz/'
                target='_blank'
                style={{ textDecoration: 'none' }}
            >
                <div style={{ color: '#83DD3C' }}>Home</div>
            </Link>
            <Link
                margin="0 30px"
                href='https://strangerstrains.xyz/docs/'
                target='_blank'
                style={{ textDecoration: 'none' }}
            >
                <div style={{ color: '#83DD3C' }}>About</div>
            </Link>


            {/* Connect Button */}
            {isConnected ? (
                <Box color="#83DD3C" margin="0 30px">Connected</Box>
            ) : (

                <Button
                    backgroundColor="#83DD3C"
                    borderRadius="5px"
                    color="green"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    onClick={connectAccount}>Connect</Button>

            )}

        
</Flex>
      
    )
};


export default NavBar;