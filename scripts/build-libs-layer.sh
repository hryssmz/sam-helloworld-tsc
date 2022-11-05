#!/bin/sh
layer_root="lambda_layers/libs-layer"
rm -rf "${layer_root}"
mkdir -p "${layer_root}/node_modules"
(cd libs && rm -rf dist && npx tsc)
cp -r "libs/dist" "${layer_root}/node_modules/libs"
