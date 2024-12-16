import React, { useState, useEffect } from 'react';  
  
const Home = ({ walletAddress }) => {  
  const [timeLeft, setTimeLeft] = useState({  
    days: 0,  
    hours: 0,  
    minutes: 0,  
    seconds: 0,  
  });  
  
  useEffect(() => {  
    const nextDrawDate = new Date('2025-01-15T00:00:00'); // Example date - adjust as needed  
  
    const updateTimer = () => {  
      const now = new Date();  
      const difference = nextDrawDate - now;  
  
      if (difference <= 0) {  
        clearInterval(timer);  
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });  
        return;  
      }  
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));  
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);  
      const minutes = Math.floor((difference / 1000 / 60) % 60);  
      const seconds = Math.floor((difference / 1000) % 60);  
  
      setTimeLeft({ days, hours, minutes, seconds });  
    };  
  
    const timer = setInterval(updateTimer, 1000);  
    updateTimer();  
  
    return () => clearInterval(timer);  
  }, []);  
  
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">  
      <div className="p-8 bg-white rounded-lg shadow-lg">  
        <h1 className="text-4xl font-bubblegum text-center mb-6">Polygon Panda Party</h1>  
  
        {/* Countdown Timer */}  
        <div className="grid grid-cols-4 gap-4 text-center mb-8">  
          {[  
            { value: timeLeft.days, label: 'Days' },  
            { value: timeLeft.hours, label: 'Hours' },  
            { value: timeLeft.minutes, label: 'Minutes' },  
            { value: timeLeft.seconds, label: 'Seconds' },  
          ].map((item, index) => (  
            <div key={index} className="bg-purple-100 p-4 rounded-lg">  
              <div className="text-4xl font-bold text-purple-600">{item.value}</div>  
              <div className="text-purple-500">{item.label}</div>  
            </div>  
          ))}  
        </div>  
  
        {/* Prize Information */}  
        <div className="mb-8">  
          <h2 className="text-2xl font-bubblegum mb-4">Monthly Prize Pool: $3,750 🏆</h2>  
          <div className="space-y-2">  
            <p>🐼 🏆 Grand Prize: $1,500</p>  
            <p>🐼 🏆 Second Prize: $1,000</p>  
            <p>🐼 🏆 Third Prize: $750</p>  
            <p>🐼 🏆 Fourth Prize: $300</p>  
            <p>🐼 🏆 Fifth Prize: $200</p>  
          </div>  
        </div>  
  
        {/* Disclaimer */}  
        <div className="mb-8">  
          <p className="text-yellow-600 font-medium text-center">  
            ⚠️ Please Note: The actual prize values will be proportional to the number of NFTs sold.  
          </p>  
        </div>  
  
        {/* How it Works */}  
        <div className="mb-8">  
          <h2 className="text-2xl font-bubblegum mb-4">How It Works 🎯</h2>  
          <div className="space-y-2">  
            <p>Every month for 12 months, 10 lucky NFT holders will be randomly selected</p>  
            <p>Odds of winning Grand Prize: 1 in 10,000</p>  
            <p>Odds of winning Second Prize: 1 in 10,000</p>  
            <p>Odds of winning Third Prize: 1 in 10,000</p>  
            <p>Odds of winning Fourth Prize: 1 in 10,000</p>  
            <p>Odds of winning Fifth Prize: 1 in 10,000</p>  
            <p>Winners have 14 days to claim their prizes</p>  
            <p>Unclaimed prizes will be added to next month's drawing</p>  
          </div>  
        </div>  
  
        {/* Prize Distribution */}  
        <div className="mb-8">  
          <h2 className="text-2xl font-bubblegum mb-4">Prize Distribution 💰</h2>  
          <div className="text-center">  
            For each prize won:  
            <div className="space-y-2 mt-2">  
              <p>50% will be added to the winning NFT's liquidity</p>  
              <p>50% will be airdropped to the winning wallet in stablecoin</p>  
            </div>  
          </div>  
        </div>  
  
        {walletAddress && (  
          <p className="text-lg mb-4">Connected Wallet: {walletAddress}</p>  
        )}  
      </div>  
    </div>  
  );  
};  
  
export default Home;   