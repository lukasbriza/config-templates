#!/bin/sh

# Check if NPM_TOKEN is set
if [ -z "$NPM_TOKEN" ]; then
  echo "❌ Error: NPM_TOKEN environment variable is not set"
  exit 1
fi

# Setup .npmrc with authentication token
echo "//npm.pkg.github.com/:_authToken=$NPM_TOKEN" >> .npmrc

# Publish
pnpm publish --tag "${NPM_TAG:-latest}"
