#!/usr/bin/env bash
rm -rf coverage
rm -rf www/js/lib
mkdir www/js/lib
rm -rf www/css/lib
mkdir www/css/lib
find . -name \"npm-debug.log\" -type f -delete
