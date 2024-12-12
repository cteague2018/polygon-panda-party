import React, { useState } from 'react';      
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';      
import Home from './components/Home';      
import Winners from './components/Winners';      
import PastWinners from './components/PastWinners';      
import Navbar from './components/Navbar';      
import Footer from './components/Footer';      
import WalletConnect from './components/WalletConnect';      

function App() {      
  const [walletAddress, setWalletAddress] = useState('');      

  const handleConnect = (address) => {      
    setWalletAddress(address);      
  };      

  return (      
    <Router>      
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 p-4" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>      
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">      
          <Navbar />      
          <WalletConnect onConnect={handleConnect} />      
          <main className="p-8 text-center">      
            <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">      
              Monthly NFT Rewards Program 🎉      
            </h1>      

            {walletAddress && (      
              <p className="text-lg text-white mb-4">Connected Wallet: {walletAddress}</p>      
            )}      

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8 mx-auto max-w-2xl">      
              <p className="text-yellow-800 font-medium">      
                ⚠️ Please Note: The actual reward amounts will be proportional to the number of NFTs sold.      
              </p>      
            </div>      

            <div className="mb-8">      
              <h2 className="text-3xl font-bold mb-4 text-purple-800">Monthly Prize Pool: \$3,750 🏆</h2>      
              <div className="space-y-2">      
                <p>🐼 🏆 Grand Prize: \$1,500</p>      
                <p>🐼 🏆 Second Prize: \$1,000</p>      
                <p>🐼 🏆 Third Prize: \$750</p>      
                <p>🐼 🏆 Fourth Prize: \$300</p>      
                <p>🐼 🏆 Fifth Prize: \$200</p>      
              </div>      
            </div>      

            <div className="mb-8">      
              <h2 className="text-3xl font-bold mb-4 text-purple-800">How It Works 🎯</h2>      
              <div className="space-y-2">      
                <p>Every month, 5 lucky NFT holders will be randomly selected</p>      
                <p>Odds of winning Grand Prize: 1 in 10,000</p>      
                <p>Odds of winning Second Prize: 1 in 10,000</p>      
                <p>Odds of winning Third Prize: 1 in 10,000</p>      
                <p>Odds of winning Fourth Prize: 1 in 10,000</p>      
                <p>Odds of winning Fifth Prize: 1 in 10,000</p>      
                <p>Winners have 14 days to claim their prizes</p>      
                <p>Unclaimed prizes will be added to next month's drawing</p>      
              </div>      
            </div>      

            <div className="mb-8">      
              <h2 className="text-3xl font-bold mb-4 text-purple-800">Prize Distribution 💰</h2>      
              <div className="text-center">      
                For each prize won:      
                <div className="space-y-2 mt-2">      
                  <p>50% will be added to the winning NFT's liquidity</p>      
                  <p>50% will be airdropped to the winning wallet in stablecoin</p>      
                </div>      
              </div>      
            </div>      
          </main>      
          <Routes>      
            <Route path="/" element={<Home />} />      
            <Route path="/winners" element={<Winners />} />      
            <Route path="/past-winners" element={<PastWinners />} />      
          </Routes>      
          <Footer />      

          {/* Confetti Elements */}    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
          <div className="confetti"></div>    
        </div>      
      </div>      
    </Router>      
  );      
}      

export default App;  