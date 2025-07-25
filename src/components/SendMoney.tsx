import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import toast from "react-hot-toast";
import bs58 from "bs58";

const SendMoney = () => {
  const { publicKey, signMessage } = useWallet();

  // ...existing code...
async function sendMoney() {
  try {
    if (!publicKey || !signMessage) {
      throw new Error("Wallet not connected!");
    }

    const message = document.getElementById(
      "message"
    ) as HTMLInputElement | null;
    if (!message) {
      throw new Error("Message input not found!");
    }

    const encodeMessage = new TextEncoder().encode(message.value);
    const signature = await signMessage(encodeMessage);

    if (!ed25519.verify(signature, encodeMessage, publicKey.toBytes()))
      throw new Error("Message signature invalid!");
    toast.success(`Message signature: ${bs58.encode(signature)}`);
  } catch (error: any) { 
    // Handle user rejection or other errors
    if (error.message?.includes('rejected') || error.message?.includes('denied') || error.message?.includes('cancelled')) {
      toast.error("Message signing was cancelled by user");
    } else {
      toast.error(`Error: ${error.message || 'Failed to sign message'}`);
    }
    console.error("Signing error:", error);
  }
}
// ...existing code...

  return (
    <div>
      <input id="message" type="text" placeholder="Message" />
      <button onClick={sendMoney}>Sign Message</button>
    </div>
  );
};

export default SendMoney;
