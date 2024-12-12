# PowerShell Script to Update Existing React Project  

# Step 1: Navigate to the existing project directory  
$projectPath = "C:\Polygon Panda Party\polygon-panda-party\my-express-app" # Change this to your project path  
Set-Location $projectPath  

# Step 2: Install required libraries if not already installed  
npm install ethers react-router-dom  

# Step 3: Create components directory if it doesn't exist  
$componentsPath = "src\components"  
if (-Not (Test-Path $componentsPath)) {  
    New-Item -ItemType Directory -Path $componentsPath  
}  

# Step 4: Create WalletConnect.js component  
$walletConnectCode = @"  
import React, { useState } from 'react';  
import { ethers } from 'ethers';  

const WalletConnect = ({ onConnect }) => {  
  const [walletAddress, setWalletAddress] = useState('');  

  const connectWallet = async () => {  
    if (window.ethereum) {  
      const provider = new ethers.providers.Web3Provider(window.ethereum);  
      await window.ethereum.request({ method: 'eth_requestAccounts' });  
      const signer = provider.getSigner();  
      const address = await signer.getAddress();  
      setWalletAddress(address);  
      onConnect(address);  
    } else {  
      alert('Please install MetaMask!');  
    }  
  };  

  return (  
    <div>  
      <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">  
        Connect Wallet  
      </button>  
      {walletAddress && <p>Connected: {walletAddress}</p>}  
    </div>  
  );  
};  

export default WalletConnect;  
"@  

Set-Content -Path "src\components\WalletConnect.js" -Value $walletConnectCode  

# Step 5: Create Winners.js component  
$winnersCode = @"  
import React, { useState } from 'react';  
import WalletConnect from './WalletConnect';  

const Winners = () => {  
  const [currentWinners, setCurrentWinners] = useState([]);  
  const [previousWinners, setPreviousWinners] = useState([]);  
  const [walletAddress, setWalletAddress] = useState('');  
  const totalNFTs = 10000;  

  const selectWinners = () => {  
    const winners = [];  
    for (let i = 0; i < 10; i++) {  
      const randomIndex = Math.floor(Math.random() * totalNFTs);  
      winners.push(\`NFT #\${randomIndex + 1}\`);  
    }  
    setCurrentWinners(winners);  
  };  

  const verifyOwnership = async (nftId) => {  
    const nftContractAddress = 'YOUR_NFT_CONTRACT_ADDRESS'; // Replace with your NFT contract address  
    const nftContractABI = []; // Add your NFT contract ABI here  

    const provider = new ethers.providers.Web3Provider(window.ethereum);  
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
    alert(\`Verified Winners: \${verifiedWinners.join(', ')}\`);  
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
        {currentWinners.map((winner, index) => (  
          <li key={index}>{winner}</li>  
        ))}  
      </ul>  
      {currentWinners.length > 0 && (  
        <button onClick={handleVerifyWinners} className="bg-blue-500 text-white p-2 rounded">  
          Verify Winners  
        </button>  
      )}  

      <h1>Previous Winners</h1>  
      <ul>  
        {previousWinners.map((winner, index) => (  
          <li key={index}>{winner}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default Winners;  
"@  

Set-Content -Path "src\components\Winners.js" -Value $winnersCode  

# Step 6: Update App.js to include the new components  
$appCode = @"  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Winners from './components/Winners';  
import Navbar from './components/Navbar'; // Ensure you have this component  
import Footer from './components/Footer'; // Ensure you have this component  

function App() {  
  return (  
    <Router>  
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 p-4">  
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">  
          <Navbar />  
          <main className="p-8 text-center">  
            <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">  
              Monthly NFT Rewards Program 🎉  
            </h1>  
            <Routes>  
              <Route path="/winners" element={<Winners />} />  
              {/* Add other routes as needed */}  
            </Routes>  
          </main>  
          <Footer />  
        </div>  
      </div>  
    </Router>  
  );  
}  

export default App;  
"@  

Set-Content -Path "src\App.js" -Value $appCode  

# Step 7: Reminder to replace placeholder values in Winners.js  
Write-Host "Please replace 'YOUR_NFT_CONTRACT_ADDRESS' and the ABI in Winners.js with your actual NFT contract details."  

# Step 8: Run the application  
npm start  