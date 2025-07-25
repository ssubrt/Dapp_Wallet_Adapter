// import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import Airdrop from "./components/Airdrop";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import {  WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";


function App() {
  return (
    <ConnectionProvider endpoint={import.meta.env.VITE_RPCURL}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
        
           <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
