#!/bin/bash

## Description: Check if node_modules exists, install or update if needed, and start Gatsby dev server
## Usage: gatsby
## Example: ddev gatsby

# Navigate to project directory
cd /var/www/html

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "node_modules directory not found, running npm install..."
  npm install --prefer-offline --no-audit --legacy-peer-deps
elif [ "package.json" -nt "node_modules" ] || [ "package-lock.json" -nt "node_modules" ]; then
  echo "package.json or package-lock.json is newer than node_modules, running npm install..."
  npm install --prefer-offline --no-audit --legacy-peer-deps
else
  echo "node_modules is up to date"
fi

# Start the Gatsby dev server
echo "Starting Gatsby dev server..."
npm run clean:develop
