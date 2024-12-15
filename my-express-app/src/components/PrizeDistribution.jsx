import React from 'react';  

const PrizeDistribution = () => {  
  return (  
    <section className="mb-8">  
      <h2 className="text-2xl font-bubblegum mb-4">Prize Distribution 💰</h2>  
      <div className="text-center">  
        <p>For each prize won:</p>  
        <div className="space-y-2 mt-2">  
          <p>50% will be added to the winning NFT's liquidity</p>  
          <p>50% will be airdropped to the winning wallet in stablecoin</p>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default PrizeDistribution;  