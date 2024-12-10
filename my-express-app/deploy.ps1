# Define variables  
$projectPath = "C:\Polygon Panda Party\polygon-panda-party\my-express-app"  # Change this to your project path  
$gitRemote = "origin"  # Change this if your remote is named differently  
$branchName = "master"  # Change this to your branch name if different  

# Navigate to the project directory  
Set-Location -Path $projectPath  

# Check if the project directory exists  
if (-Not (Test-Path $projectPath)) {  
    Write-Host "Project path does not exist: $projectPath" -ForegroundColor Red  
    exit  
}  

# Step 1: Add changes to Git  
git add .  

# Step 2: Commit changes  
$commitMessage = "Deploying to Git and Vercel on $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"  
git commit -m $commitMessage  

# Step 3: Push changes to Git  
git push $gitRemote $branchName  

# Step 4: Build the project (if applicable)  
# Uncomment the next line if you need to build your project before deploying  
npm run build  

# Step 5: Deploy to Vercel  
# Check if Vercel CLI is installed  
if (-Not (Get-Command vercel -ErrorAction SilentlyContinue)) {  
    Write-Host "Vercel CLI is not installed. Please install it using 'npm install -g vercel'." -ForegroundColor Red  
    exit  
}  

# Deploy to Vercel  
vercel --prod  

# Output success message  
Write-Host "Deployment to Git and Vercel completed successfully!" -ForegroundColor Green  