import React from 'react';  

const Home = () => {  
  const [timeLeft, setTimeLeft] = React.useState({   
    days: 0,   
    hours: 0,   
    minutes: 0,   
    seconds: 0   
  });  

  React.useEffect(() => {  
    const nextDrawDate = new Date('2024-12-31T00:00:00'); // Set your next draw date here  

    const updateTimer = () => {  
      const now = new Date();  
      const difference = nextDrawDate - now;  

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));  
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);  
      const minutes = Math.floor((difference / 1000 / 60) % 60);  
      const seconds = Math.floor((difference / 1000) % 60);  

      setTimeLeft({ days, hours, minutes, seconds });  
    };  

    const timer = setInterval(updateTimer, 1000);  
    updateTimer(); // Initial update  

    // Cleanup on unmount  
    return () => clearInterval(timer);  
  }, []);  

  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">  
      <div className="p-8 bg-white rounded-lg shadow-lg">  
        <h1 className="text-3xl font-bubblegum text-center mb-6">Next Draw Countdown</h1>  
        <div className="grid grid-cols-4 gap-4 text-center">  
          <div className="bg-purple-100 p-4 rounded-lg">  
            <div className="text-4xl font-bold text-purple-600">{timeLeft.days}</div>  
            <div className="text-purple-500">Days</div>  
          </div>  
          <div className="bg-purple-100 p-4 rounded-lg">  
            <div className="text-4xl font-bold text-purple-600">{timeLeft.hours}</div>  
            <div className="text-purple-500">Hours</div>  
          </div>  
          <div className="bg-purple-100 p-4 rounded-lg">  
            <div className="text-4xl font-bold text-purple-600">{timeLeft.minutes}</div>  
            <div className="text-purple-500">Minutes</div>  
          </div>  
          <div className="bg-purple-100 p-4 rounded-lg">  
            <div className="text-4xl font-bold text-purple-600">{timeLeft.seconds}</div>  
            <div className="text-purple-500">Seconds</div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Home;  