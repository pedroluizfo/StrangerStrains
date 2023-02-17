import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import StrangerStrains from './StrangerStrains.json';
import {Box,Button,Flex,Input,Text} from '@chakra-ui/react';


const StrangerStrainsNFTAddress = "0x5DA547a9F49aF80c435ADb7c7eaa0AbbF480A2b6";

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                StrangerStrainsNFTAddress,
                StrangerStrains.abi,
                signer


            );

            try{
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);

            }catch(err){
                console.log("error", err)

            }


        }

    }

    const handleDecrement = () =>{
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () =>{
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    return(
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #00FF00">StrangerStrains</Text>
                    <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="inherit" textShadow="0 2px 2px #00FF00"> Buy weed don't get arrested </Text>
                </div>
                {isConnected ? (

                    <div>
                        <Flex justify="center" align="center">
                        <Button
                        backgroundColor="#00FF00"
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
                        backgroundColor="#00FF00"
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
                        backgroundColor="#00FF00"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="black"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                        onClick = {handleMint}>Mint now</Button>


                    </div>

                ): (

                    <Text
                    marginTop="70px"
                    fontSize="30px"
                    letterSpacing="-5.5%"
                    fontFamily="inherit"
                    textShadow="0 3px #00FF00"
                    color="black"
                    >You must be connected to Mint</Text>

                )}
            </Box>
        </Flex>

    );


};

export default MainMint;
