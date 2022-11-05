#!/bin/sh
(cd libs && rm -rf dist && npx tsc)
(cd node_modules/ && ln -s ../libs/dist libs)
