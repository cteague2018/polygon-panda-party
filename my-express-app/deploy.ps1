# Exit immediately if a command exits with a non-zero status  
$ErrorActionPreference = "Stop"  

# Step 1: Install dependencies  
Write-Host "Installing dependencies..."  
npm install  

# Step 2: Build your project (if applicable)  
# Uncomment the next line if you have a build step (e.g., for React or other front-end frameworks)  
# npm run build  

# Step 3: Commit changes to Git  
Write-Host "Committing changes..."  
git add .  
git commit -m "Deploying latest changes"  

# Step 4: Push to Heroku (or your chosen platform)  
Write-Host "Deploying to Heroku..."  
git push heroku main  

# Step 5: Open the application in the browser  
Write-Host "Opening the application in the browser..."  
Start-Process "https://your-app-name.herokuapp.com"  # Replace with your actual Heroku app URL  

Write-Host "Deployment complete!"  