#!/bin/bash
set -e

# 1. Build the Next.js static site
npm run build

# Add a temporary worktree for gh-pages
git worktree add ../deploy-tmp gh-pages

# Clear old build
cd ../deploy-tmp
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Copy build output
cp -R ../intelli-edge/out/* .

# Keep CNAME if needed
cp ../intelli-edge/CNAME .  # if you have it
cp ../intelli-edge/.nojekyll .

# Commit and push
git add .
git commit -m "Deploy latest build"
git push origin -f gh-pages

# Remove worktree
cd ../intelli-edge
git worktree remove ../deploy-tmp

