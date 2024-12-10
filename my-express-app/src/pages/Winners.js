import React from 'react';

function Winners() {
  const currentWinners = [
    { rank: 1, prize: "$1,500", nftId: "#4281", wallet: "0x1234...5678" },
    { rank: 2, prize: "$1,000", nftId: "#6392", wallet: "0x8765...4321" },
    { rank: 3, prize: "$750", nftId: "#1573", wallet: "0x9876...1234" },
    { rank: 4, prize: "$300", nftId: "#8924", wallet: "0x4567...8901" },
    { rank: 5, prize: "$200", nftId: "#2467", wallet: "0x3210...9876" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <nav className="bg-purple-600 p-4">
          <div className="text-center">
            <h1 className="text-white text-3xl font-bubblegum mb-4">🏆 Current Winners</h1>
          </div>
        </nav>

        <main className="p-8">
          <div className="mb-8">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 text-center font-medium">
                Winners have 14 days to claim their prizes. Unclaimed prizes will be added to next month's drawing.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-purple-200 text-left text-xs font-semibold text-purple-800 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 border-b-2 border-purple-200 text-left text-xs font-semibold text-purple-800 uppercase tracking-wider">
                      Prize
                    </th>
                    <th className="px-6 py-3 border-b-2 border-purple-200 text-left text-xs font-semibold text-purple-800 uppercase tracking-wider">
                      NFT ID
                    </th>
                    <th className="px-6 py-3 border-b-2 border-purple-200 text-left text-xs font-semibold text-purple-800 uppercase tracking-wider">
                      Wallet
                    </th>
                    <th className="px-6 py-3 border-b-2 border-purple-200 text-left text-xs font-semibold text-purple-800 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentWinners.map((winner, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-medium">{winner.rank}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">
                        {winner.prize}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {winner.nftId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-mono">
                        {winner.wallet}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending Claim
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Winners;
