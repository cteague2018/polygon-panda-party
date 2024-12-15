import React from 'react';  
  
const WalletConnect = ({ onConnect, isLoading }) => {  
  const handleConnect = () => {  
    // Replace with your actual wallet connection logic  
    const mockAddress = '0x1234567890abcdef1234567890abcdef12345678';  
    onConnect(mockAddress);  
  };  
  
  return (  
    <div>  
      {isLoading ? (  
        <p>Connecting...</p>  
      ) : (  
        <button onClick={handleConnect} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  
          Connect Wallet  
        </button>  
      )}  
    </div>  
  );  
};  
  
export default WalletConnect;  