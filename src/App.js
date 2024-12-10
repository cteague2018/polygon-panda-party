import React from 'react';

// Add required font
const fontImport = document.createElement('link');
fontImport.href = 'https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap';
fontImport.rel = 'stylesheet';
document.head.appendChild(fontImport);

// Add custom styles
const style = document.createElement('style');
style.textContent = `
  .font-bubblegum {
    font-family: 'Bubblegum Sans', cursive;
  }
`;
document.head.appendChild(style);

function App() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const nextDrawDate = new Date('2024-12-31');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = nextDrawDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <nav className="bg-purple-600 p-4">
          <div className="text-center">
            <h1 className="text-white text-3xl font-bubblegum mb-4">🐼 Polygon Panda Party</h1>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                🏆 View Current Winners
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
                📜 View Past Winners
              </button>
            </div>
          </div>
        </nav>

        <main className="p-8">
          <div className="text-center mb-8">
            {/* Timer Box */}
            <div style={{
              border: '4px solid #8B5CF6',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              backgroundColor: '#F3E8FF',
              marginBottom: '2rem',
              marginTop: '2rem',
              maxWidth: '48rem',
              margin: '2rem auto'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <h2 className="text-3xl font-bubblegum mb-6 text-purple-800">Next Draw In:</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1rem'
                }}>
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Minutes' },
                    { value: timeLeft.seconds, label: 'Seconds' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      backgroundColor: '#F5F3FF',
                      borderRadius: '0.5rem',
                      padding: '1rem',
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                      border: '2px solid #C4B5FD'
                    }}>
                      <div style={{
                        fontSize: '2.25rem',
                        fontWeight: 'bold',
                        color: '#7C3AED'
                      }}>{item.value}</div>
                      <div style={{
                        color: '#8B5CF6',
                        fontWeight: '600'
                      }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bubblegum mb-6">
              Monthly NFT Rewards Program 🎉
            </h1>

            {/* Added Disclaimer Box */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8 mx-auto max-w-2xl">
              <p className="text-yellow-800 font-medium">
                ⚠️ Please Note: The actual reward amounts will be proportional to the number of NFTs sold.
              </p>
            </div>

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

            <div className="mb-8">
              <h2 className="text-2xl font-bubblegum mb-4">How It Works 🎯</h2>
              <div className="space-y-2">
                <p>Every month, 10 lucky NFT holders will be randomly selected</p>
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
              <h2 className="text-2xl font-bubblegum mb-4">Prize Distribution 💰</h2>
              <div className="text-center">
                For each prize won:
                <div className="space-y-2 mt-2">
                  <p>50% will be added to the winning NFT's liquidity</p>
                  <p>50% will be airdropped to the winning wallet in stablecoin</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;