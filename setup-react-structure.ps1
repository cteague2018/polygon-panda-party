# setup-react-structure.ps1  

# Function to create file with content  
function Create-FileWithContent {  
    param (  
        [string]$path,  
        [string]$content  
    )  
    New-Item -ItemType File -Path $path -Force  
    Set-Content -Path $path -Value $content  
}  

# Create main directories  
Write-Host "Creating directory structure..." -ForegroundColor Yellow  
$directories = @(  
    ".\src\components",  
    ".\src\pages"  
)  

foreach ($dir in $directories) {  
    New-Item -ItemType Directory -Path $dir -Force  
    Write-Host "Created directory: $dir" -ForegroundColor Green  
}  

# Create component files  
$components = @{  
    ".\src\components\Navbar.js" = @"  
import React from 'react';  
import { Link } from 'react-router-dom';  

const Navbar = () => {  
    return (  
        <nav className="bg-gray-800 p-4">  
            <ul className="flex space-x-4">  
                <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>  
                <li><Link to="/winners" className="text-white hover:text-gray-300">Winners</Link></li>  
                <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>  
            </ul>  
        </nav>  
    );  
};  

export default Navbar;  
"@  

    ".\src\components\Footer.js" = @"  
import React from 'react';  

const Footer = () => {  
    return (  
        <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">  
            <p>© 2024 Polygon Panda Party. All rights reserved.</p>  
        </footer>  
    );  
};  

export default Footer;  
"@  
}  

# Create page files  
$pages = @{  
    ".\src\pages\Home.js" = @"  
import React from 'react';  

const Home = () => {  
    return (  
        <div className="container mx-auto px-4 py-8">  
            <h1 className="text-4xl font-bold mb-4">Welcome to Polygon Panda Party! 🐼</h1>  
            <p className="text-lg">This is the home page of the Polygon Panda Party project.</p>  
        </div>  
    );  
};  

export default Home;  
"@  

    ".\src\pages\Winners.js" = @"  
import React from 'react';  

const Winners = () => {  
    return (  
        <div className="container mx-auto px-4 py-8">  
            <h1 className="text-4xl font-bold mb-4">Winners</h1>  
            <p className="text-lg">Here is the list of winners for the Polygon Panda Party.</p>  
        </div>  
    );  
};  

export default Winners;  
"@  

    ".\src\pages\About.js" = @"  
import React from 'react';  

const About = () => {  
    return (  
        <div className="container mx-auto px-4 py-8">  
            <h1 className="text-4xl font-bold mb-4">About Polygon Panda Party</h1>  
            <p className="text-lg">Learn more about the Polygon Panda Party project and how it works.</p>  
        </div>  
    );  
};  

export default About;  
"@  
}  

# Create App.js  
$appContent = @"  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import Home from './pages/Home';  
import Winners from './pages/Winners';  
import About from './pages/About';  

function App() {  
    return (  
        <Router>  
            <div className="min-h-screen bg-gray-100">  
                <Navbar />  
                <main className="pb-16">  
                    <Routes>  
                        <Route path="/" element={<Home />} />  
                        <Route path="/winners" element={<Winners />} />  
                        <Route path="/about" element={<About />} />  
                    </Routes>  
                </main>  
                <Footer />  
            </div>  
        </Router>  
    );  
}  

export default App;  
"@  

# Create styles.css  
$stylesContent = @"  
@tailwind base;  
@tailwind components;  
@tailwind utilities;  

body {  
    margin: 0;  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',  
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',  
        sans-serif;  
    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;  
}  
"@  

# Create all component files  
foreach ($file in $components.Keys) {  
    Write-Host "Creating component: $file" -ForegroundColor Yellow  
    Create-FileWithContent -path $file -content $components[$file]  
    Write-Host "Created component: $file" -ForegroundColor Green  
}  

# Create all page files  
foreach ($file in $pages.Keys) {  
    Write-Host "Creating page: $file" -ForegroundColor Yellow  
    Create-FileWithContent -path $file -content $pages[$file]  
    Write-Host "Created page: $file" -ForegroundColor Green  
}  

# Create App.js and styles.css  
Create-FileWithContent -path ".\src\App.js" -content $appContent  
Create-FileWithContent -path ".\src\styles.css" -content $stylesContent  

Write-Host "Installing required dependencies..." -ForegroundColor Yellow  
npm install react-router-dom @tailwindcss/postcss7-compat postcss autoprefixer  
npx tailwindcss init -p  

Write-Host "Setup complete!" -ForegroundColor Green  
Write-Host "You can now start your development server with 'npm start'" -ForegroundColor Yellow  