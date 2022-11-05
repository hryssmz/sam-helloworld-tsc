#!/bin/sh
layer_root="lambda_layers/npm-layer"
rm -rf "${layer_root}"
mkdir -p "${layer_root}"
cp package.json "${layer_root}/"
(cd "${layer_root}" && npm install --omit=dev)
