#!/bin/bash

set -e

pnpm i --frozen-lockfile

pnpm build

pnpm update:version

cd ..

dir

cd ./dist/fish-bubble-design

npm login

npm publish

echo "✅ Publish completed"
