#!/bin/bash
echo 'Starting After-Install Script'

echo 'Installing npm packages...'
npm install

echo 'Running npm tests...'
npm test

echo 'After-Install  Script Finished'