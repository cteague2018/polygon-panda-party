import React, { useState } from 'react';    
import WalletConnect from './WalletConnect';    
import { ethers } from 'ethers'; // Correct import    

const Winners = () => {    
  const [currentWinners, setCurrentWinners] = useState([]);    
  const [previousWinners, setPreviousWinners] = useState([]);    
  const [walletAddress, setWalletAddress] = useState('');    
  const totalNFTs = 10000;    

  const selectWinners = () => {    
    const uniqueWinners = new Set(); // Use a Set to ensure uniqueness  

    while (uniqueWinners.size < 10) { // Ensure we get 10 unique winners  
      const randomIndex = Math.floor(Math.random() * totalNFTs);  
      uniqueWinners.add(`NFT #${randomIndex + 1}`); // Add unique NFT IDs  
    }  

    setCurrentWinners(Array.from(uniqueWinners)); // Convert Set back to Array  
  };    

  const verifyOwnership = async (nftId) => {    
    const nftContractAddress = 'YOUR_NFT_CONTRACT_ADDRESS'; // Replace with your NFT contract address    
    const nftContractABI = []; // Add your NFT contract ABI here    

    const provider = new ethers.BrowserProvider(window.ethereum); // Updated for ethers v6    
    const contract = new ethers.Contract(nftContractAddress, nftContractABI, provider);    
    const owner = await contract.ownerOf(nftId);    

    return owner.toLowerCase() === walletAddress.toLowerCase();    
  };    

  const handleVerifyWinners = async () => {    
    const verifiedWinners = [];    
    for (const nft of currentWinners) {    
      const nftId = nft.split('#')[1];    
      const isOwner = await verifyOwnership(nftId);    
      if (isOwner) {    
        verifiedWinners.push(nft);    
      }    
    }    
    alert(`Verified Winners: ${verifiedWinners.join(', ')}`);    
    setPreviousWinners((prev) => [...prev, ...verifiedWinners]);    
    setCurrentWinners([]);    
  };    

  return (    
    <div>    
      <h1>Current Winners</h1>    
      <WalletConnect onConnect={setWalletAddress} />    
      <button onClick={selectWinners} className="bg-green-500 text-white p-2 rounded">    
        Select Winners    
      </button>    
      <ul>    
        {currentWinners.map((winner) => (    
          <li key={winner + Date.now()}>{winner}</li> // Use a unique key  
        ))}    
      </ul>    
      {currentWinners.length > 0 && (    
        <button onClick={handleVerifyWinners} className="bg-blue-500 text-white p-2 rounded">    
          Verify Winners    
        </button>    
      )}    

      <h1>Previous Winners</h1>    
      <ul>    
        {previousWinners.map((winner) => (    
          <li key={winner + Date.now()}>{winner}</li> // Use a unique key  
        ))}    
      </ul>    
    </div>    
  );    
};    

export default Winners;    