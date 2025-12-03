#!/bin/bash
set -e

# 1. Build the Next.js static site
npm run build
npx next export

# 2. Remove everything in current directory except `out` and `CNAME`
find . -mindepth 1 -maxdepth 1 ! -name 'out' ! -name 'CNAME' ! -name 'deploy.sh' -exec rm -rf {} +

# 3. Copy all files from out/ to current directory
cp -r out/* .

# 4. Optional: remove empty out/ folder
rm -rf out

echo "Deployment files are ready in the root directory."
