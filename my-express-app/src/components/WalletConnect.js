import React, { useState } from 'react';    
import { ethers } from 'ethers';    

const WalletConnect = ({ onConnect }) => {    
  const [loading, setLoading] = useState(false);    

  const connectWallet = async () => {    
    if (loading) return;    
    setLoading(true);    
    try {    
      if (window.ethereum) {    
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });    
        onConnect(accounts[0]);    

        const provider = new ethers.BrowserProvider(window.ethereum);    
        const signer = await provider.getSigner();    
        console.log('Signer address:', await signer.getAddress());    
      } else {    
        alert('Please install MetaMask!');    
      }    
    } catch (error) {    
      console.error('Error connecting to wallet:', error);    
    } finally {    
      setLoading(false);    
    }    
  };    

  return (    
    <button onClick={connectWallet} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">    
      {loading ? 'Connecting...' : 'Connect Wallet'}    
    </button>    
  );    
};    

export default WalletConnect;  