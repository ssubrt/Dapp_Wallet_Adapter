import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import ShowSolBalance from "./ShowSolBalance";
import SendMoney from "./SendMoney";

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const handleClick = async () => {
    if (wallet.publicKey) {
      const inputElement = document.getElementById(
        "input"
      ) as HTMLInputElement | null;
      const amount =
        inputElement?.value != null ? parseInt(inputElement.value) : 0;
      await connection.requestAirdrop(wallet.publicKey, amount * 1e9);
      alert("Airdropped Solana to your wallet successfully!");
    } else {
      alert("Wallet not connected!");
    }
  };

  return (
    <div>
      <div>
        hi from <b>Wallet</b>
      </div>
      <input id="input" type="text" placeholder="Amount"></input>
      <button onClick={handleClick}>Send Airdop</button>
      <ShowSolBalance />
      <SendMoney />
    </div>
  );
};

export default Airdrop;
