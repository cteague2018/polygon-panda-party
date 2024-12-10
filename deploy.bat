batch  
   @echo off  
   setlocal  

   REM Build the React application  
   echo Building the application...  
   npm run build  

   REM Check for changes in the build directory  
   git status --porcelain build/ | findstr /R "^[A-Z]" >nul  
   if %errorlevel%==0 (  
       echo Changes detected in the build directory. Preparing to deploy...  

       REM Stage the build directory  
       git add build/  

       REM Commit the changes  
       git commit -m "Deploying new build"  

       REM Push to the main branch  
       git push origin main  
       echo Deployment successful!  
   ) else (  
       echo No changes to deploy.  
   )  

   endlocal  