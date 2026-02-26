#!/bin/sh
echo "Installing Estatery Frontend dependencies..."
cd estatery && npm install
if [ $? -eq 0 ]; then
  echo ""
  echo "Dependencies installed successfully."
  echo "Run 'npm run dev' in the estatery folder to start the development server."
else
  echo ""
  echo "Installation failed. Make sure Node.js and npm are installed."
  exit 1
fi
