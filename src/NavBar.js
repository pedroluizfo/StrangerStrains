import React from 'react'
import {Box,Button,Flex,Image,Link,Spacer} from '@chakra-ui/react';
import Logo from './assets/icons/LogoStrains.svg';
import './responsive.css'


const NavBar =({accounts, setAccounts}) =>{
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }

    return(
        <Flex justify="space-between" align="center" padding="30px">
        {/* Left Side - Social Media Icons */}
        <Flex justify="space-around" width="40%" padding ="0 75px">
            <Link href='https://www.instagram.com/strangerstrains.s2/' target='_blank' style={{textDecoration: 'none'}}>
                <div style={{color: '#83DD3C'}}>Insta</div>
            </Link>

            <Link href='https://twitter.com/StrainsS2' target='_blank' style={{textDecoration: 'none'}}>
                <div style={{color: '#83DD3C'}}>Twitter</div>
            </Link>

            <Link href='https://discord.gg/ZD9U9aj3ja' target='_blank' style={{textDecoration: 'none'}}>
                <div style={{color: '#83DD3C'}}>Discord</div>
            </Link>
        </Flex>


          {/* Middle - Logo */}
        <Flex className='logo' justify="center" width="20%">
            <img src={Logo} alt="Logo" color="#83DD3C" />
            
        </Flex>


        {/* Right Side - Sections and connect */}
        <Flex justify="space-around" align="center" width="40%" padding ="30px">

        <Link href='https://strangerstrains.xyz/' target='_blank' style={{textDecoration: 'none'}}>
                <div style={{color: '#83DD3C'}}>Home</div>
            </Link>
            <Link href='https://strangerstrains.xyz/docs/' target='_blank' style={{textDecoration: 'none'}}>
                <div style={{color: '#83DD3C'}}>About</div>
            </Link>
        

         {/* Connect Button */}
         {isConnected ?(
            <Box color="#83DD3C" margin="0 15px">Connected</Box>
        ): (

            <Button
            backgroundColor="#83DD3C"
            borderRadius="5px"
            color="green"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick = {connectAccount}>Connect</Button>

        )}

        </Flex>
      </Flex>    
    )
};

export default NavBar;
