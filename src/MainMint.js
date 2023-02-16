import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import StrangerStrains from './StrangerStrains.json';

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
        <div>
            <h1>StrangerStrains</h1>
            <p> description here !!! </p>
            {isConnected ? (

                <div>
                    <div>
                      <button onClick={handleDecrement}>-</button> 
                      <input type ="number" value={mintAmount} />
                      <button onClick={handleIncrement}>+</button> 
                    </div>
                    <button onClick={handleMint}>Mint Now</button>


                </div>

            ): (

                <p>You must be connected to Mint</p>

            )}

        </div>

    );


};

export default MainMint;
