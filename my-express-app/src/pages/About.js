import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <nav className="bg-purple-600 p-4">
          <div className="text-center">
            <h1 className="text-white text-3xl font-bubblegum mb-4">About Polygon Panda Party</h1>
          </div>
        </nav>

        <main className="p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bubblegum mb-4 text-purple-800">Our Story 🐼</h2>
              <p className="text-gray-700 leading-relaxed">
                Polygon Panda Party is a unique NFT project that combines the fun of collecting adorable panda NFTs with the excitement of monthly prize drawings. Our mission is to create a vibrant community of NFT enthusiasts while providing real value through our reward system.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bubblegum mb-4 text-purple-800">The Collection 🎨</h2>
              <p className="text-gray-700 leading-relaxed">
                Our collection features 10,000 uniquely generated panda NFTs, each with its own personality and traits. Every panda is special and gives its holder a chance to win in our monthly drawings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bubblegum mb-4 text-purple-800">Monthly Rewards 🎁</h2>
              <p className="text-gray-700 leading-relaxed">
                Each month, we randomly select winners from our NFT holders to receive prizes from our reward pool. The program is designed to provide ongoing value to our community members and encourage long-term holding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bubblegum mb-4 text-purple-800">Community First 🤝</h2>
              <p className="text-gray-700 leading-relaxed">
                We believe in building a strong, engaged community. Our holders are not just NFT owners; they're part of an exclusive club with real benefits and opportunities to win substantial rewards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bubblegum mb-4 text-purple-800">Contact Us 📧</h2>
              <div className="space-y-2 text-gray-700">
                <p>Have questions? Reach out to us:</p>
                <p>Discord: PolygonPandaParty</p>
                <p>Twitter: @PolyPandaParty</p>
                <p>Email: hello@polygonpandaparty.com</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
