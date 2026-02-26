@echo off
echo Installing Estatery Frontend dependencies...
cd estatery
call npm install
if %errorlevel% equ 0 (
  echo.
  echo Dependencies installed successfully.
  echo Run "npm run dev" in the estatery folder to start the development server.
) else (
  echo.
  echo Installation failed. Make sure Node.js and npm are installed.
  exit /b 1
)
