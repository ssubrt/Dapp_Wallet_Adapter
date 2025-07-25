

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useEffect } from 'react';

const ShowSolBalance = () => {


    const wallet = useWallet();

    const { connection } = useConnection();

    useEffect(() => {
        async function getBalance(){
        if(!wallet.publicKey){
            console.log("Wallet not connected");
            document.getElementById('balance')!.innerText = "Wallet not connected";
            return;
        }
        else{
            console.log("connection is : ", connection)
            const amount = await connection.getBalance(wallet.publicKey);
            document.getElementById('balance')!.innerText = (amount / LAMPORTS_PER_SOL).toString() + " SOL";
        }
    }
    getBalance();


    },[wallet.publicKey, connection]);
    
  return (
    <div>
        <div>Sol balance : <span id="balance"></span></div>
    </div>
  )
}

export default ShowSolBalance;