import React, { useState, Suspense } from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './components/Home';  
import Winners from './components/Winners';  
import PastWinners from './components/PastWinners';  
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import WalletConnect from './components/WalletConnect';  
import './index.css';  
  
function App() {  
  const [walletAddress, setWalletAddress] = useState('');  
  const [isLoading, setIsLoading] = useState(false);  
  const [error, setError] = useState(null);  
  
  const handleConnect = async (address) => {  
    try {  
      setIsLoading(true);  
      setError(null);  
      setWalletAddress(address);  
    } catch (err) {  
      setError(err.message);  
      console.error('Wallet connection error:', err);  
    } finally {  
      setIsLoading(false);  
    }  
  };  
  
  const renderConfetti = () => {  
    return Array.from({ length: 9 }).map((_, index) => (  
      <div  
        key={`confetti-${index}`}  
        className="confetti"  
        style={{  
          left: `${(index + 1) * 10}%`,  
          animationDelay: `${index * 0.5}s`,  
          backgroundColor: ['#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'][index % 5],  
        }}  
        aria-hidden="true"  
      />  
    ));  
  };  
  
  return (  
    <Router>  
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 p-4 font-bubblegum">  
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">  
          <Navbar /> {/* Ensure Navbar is included here */}  
  
          <div className="p-8">  
            {error && (  
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">  
                <strong className="font-bold">Error:</strong>  
                <span className="block sm:inline">{error}</span>  
              </div>  
            )}  
            <WalletConnect onConnect={handleConnect} isLoading={isLoading} />  
          </div>  
  
          <main className="p-8 text-center">  
            <h1 className="text-6xl font-bold mb-6 text-yellow-400 drop-shadow-lg"> {/* Changed color to yellow */}  
              Monthly NFT Rewards Program 🎉  
            </h1>  
  
            {walletAddress && ( // Display the wallet address if connected  
              <p className="text-lg text-white mb-4">Connected Wallet: {walletAddress}</p>  
            )}  
  
            {/* Other content... */}  
  
            <Suspense fallback={<div className="text-center p-4">Loading...</div>}>  
              <Routes>  
                <Route path="/" element={<Home walletAddress={walletAddress} />} />  
                <Route path="/winners" element={<Winners />} />  
                <Route path="/past-winners" element={<PastWinners />} />  
              </Routes>  
            </Suspense>  
  
            <Footer />  
            {renderConfetti()}  
          </main>  
        </div>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  