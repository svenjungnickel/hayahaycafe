#!/bin/bash

## Description: Run ci checks
## Usage: ci
## Example: ddev ci

# Navigate to project directory
cd /var/www/html
#npm run lint && npm run test && npm run build && npm run lighthouse && npm run test:e2e:ci
npm run lint && npm run test && npm run build && npm run lighthouse
