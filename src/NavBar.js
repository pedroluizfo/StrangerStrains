import React from 'react'

const NavBar =({accounts, setAccounts}) =>{
    const isConnected = boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }

    return(
        <div>
        {/* Left Side - Social Media Icons */}
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Discord</div>

        {/* Right Side - Sections and connect */}
        <div>About</div>
        <div>Mint</div>
        <div>Team</div>

        {/* Connect Button */}
        {isConnected ?(
            <p>Connected</p>
        ): (
            <button onClick = {connectAccount}>Connect</button>

        )}

        

        </div>
        
    )

};

export default NavBar;
