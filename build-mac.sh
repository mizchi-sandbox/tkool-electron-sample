#!/usr/bin/env sh
electron-packager . TkoolElectronSample --out dist/mac --platform=darwin --arch=x64 --version=0.34.2
(
  cd dist/mac
  zip -r -y TkoolElectronSample-darwin-x64.zip TkoolElectronSample-darwin-x64
)
