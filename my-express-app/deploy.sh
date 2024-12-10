#!/bin/bash  

# Exit immediately if a command exits with a non-zero status  
set -e  

# Step 1: Install dependencies  
echo "Installing dependencies..."  
npm install  

# Step 2: Build your project (if applicable)  
# Uncomment the next line if you have a build step (e.g., for React or other front-end frameworks)  
# npm run build  

# Step 3: Commit changes to Git  
echo "Committing changes..."  
git add .  
git commit -m "Deploying latest changes"  

# Step 4: Push to Heroku (or your chosen platform)  
echo "Deploying to Heroku..."  
git push heroku main  

# Step 5: Open the application in the browser  
echo "Opening the application in the browser..."  
heroku open  

echo "Deployment complete!"  