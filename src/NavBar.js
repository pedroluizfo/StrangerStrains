import React from 'react'
import {Box,Button,Flex,Image,Link,Spacer} from '@chakra-ui/react';
import fb from './assets/icons/icons8-facebook-32.png'
import twitter from './assets/icons/icons8-twitter-32.png'
import disc from './assets/icons/icons8-discord-32.png'



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
            <Link href='https://www.facebook.com/'>
                <Image src={fb} boxSize= "42px" margin="0 15"/>
            </Link>
            <Link href='https://twitter.com/'>
                <Image src={twitter} boxSize= "42px" margin="0 15"/>
            </Link>
            <Link href='https://discord.com/'>
                <Image src={disc} boxSize= "42px" margin="0 15"/>
            </Link>


        </Flex>

        {/* Right Side - Sections and connect */}
        <Flex justify="space-around" align="center" width="40%" padding ="30px">

        <Box margin="0 15px">About</Box>
        <Spacer/>
        <Box margin="0 15px">Mint</Box>
        <Spacer/>
        <Box margin="0 15px">Team</Box>
        <Spacer/>

         {/* Connect Button */}
         {isConnected ?(
            <Box margin="0 15px">Connected</Box>
        ): (

            <Button
            backgroundColor="#00FF00"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="black"
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
