import React, { useState, useEffect } from 'react';  

// Sample data for past winners (this would typically come from a database or API)  
const initialPastWinners = [  
  { id: 1, prize: 'Grand Prize', amount: '\$1,500', winner: 'NFT#1234', date: '2024-01-15' },  
  { id: 2, prize: 'Second Prize', amount: '\$1,000', winner: 'NFT#5678', date: '2024-01-15' },  
  // Add more initial winners as needed  
];  

const PastWinners = () => {  
  const [pastWinners, setPastWinners] = useState(initialPastWinners);  

  // Function to add a new winner (this would be called after winners are selected)  
  const addWinner = (newWinner) => {  
    setPastWinners((prevWinners) => {  
      // Limit to the last 12 months  
      const filteredWinners = prevWinners.filter(winner => {  
        const winnerDate = new Date(winner.date);  
        const twelveMonthsAgo = new Date();  
        twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1);  
        return winnerDate >= twelveMonthsAgo;  
      });  
      return [...filteredWinners, newWinner];  
    });  
  };  

  // Simulate adding a winner (this would be replaced with actual logic)  
  useEffect(() => {  
    const newWinner = {  
      id: pastWinners.length + 1,  
      prize: 'Third Prize',  
      amount: '\$750',  
      winner: 'NFT#9101',  
      date: new Date().toISOString().split('T')[0], // Current date  
    };  
    addWinner(newWinner);  
  }, []);  

  return (  
    <div className="p-8">  
      <h2 className="text-3xl font-bubblegum mb-6 text-center">🏆 Past Winners</h2>  
      <div className="bg-white rounded-lg shadow-lg p-6">  
        <ul className="space-y-4">  
          {pastWinners.map((winner) => (  
            <li key={winner.id} className="flex justify-between items-center p-4 border-b border-gray-200">  
              <span className="font-semibold">{winner.prize}</span>  
              <span className="text-gray-600">{winner.amount}</span>  
              <span className="text-green-600 font-bold">{winner.winner}</span>  
              <span className="text-gray-400">{new Date(winner.date).toLocaleDateString()}</span>  
            </li>  
          ))}  
        </ul>  
      </div>  
    </div>  
  );  
};  

export default PastWinners;  