import React, { useState } from 'react';  

// Sample prize data  
const prizes = [  
  { id: 1, name: 'Grand Prize', amount: '\$1,500' },  
  { id: 2, name: 'Second Prize', amount: '\$1,000' },  
  { id: 3, name: 'Third Prize', amount: '\$750' },  
  { id: 4, name: 'Fourth Prize', amount: '\$300' },  
  { id: 5, name: 'Fifth Prize', amount: '\$200' },  
];  

// Function to simulate selecting a random winner  
const selectRandomWinner = (totalNFTs) => {  
  const winnerIndex = Math.floor(Math.random() * totalNFTs) + 1; // Random number between 1 and totalNFTs  
  return `NFT#${winnerIndex}`; // Return a string representing the NFT winner  
};  

const Winners = () => {  
  const [winners, setWinners] = useState([]);  

  const handleSelectWinners = () => {  
    const selectedWinners = prizes.map(prize => ({  
      prize: prize.name,  
      amount: prize.amount,  
      winner: selectRandomWinner(10000), // Simulate selecting a winner from 10,000 NFTs  
    }));  
    setWinners(selectedWinners);  
  };  

  return (  
    <div className="p-8">  
      <h2 className="text-3xl font-bubblegum mb-6 text-center">🏆 Current Winners</h2>  
      <div className="text-center mb-4">  
        <button  
          onClick={handleSelectWinners}  
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"  
        >  
          Select Winners  
        </button>  
      </div>  
      {winners.length > 0 && (  
        <div className="bg-white rounded-lg shadow-lg p-6">  
          <ul className="space-y-4">  
            {winners.map((winner, index) => (  
              <li key={index} className="flex justify-between items-center p-4 border-b border-gray-200">  
                <span className="font-semibold">{winner.prize}</span>  
                <span className="text-gray-600">{winner.amount}</span>  
                <span className="text-green-600 font-bold">{winner.winner}</span>  
              </li>  
            ))}  
          </ul>  
        </div>  
      )}  
    </div>  
  );  
};  

export default Winners;  