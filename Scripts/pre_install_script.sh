#!/bin/bash
echo 'Starting Pre-Install Script'
apt-get install nodejs-legacy
apt-get install npm
npm install -g pm2

pm2 stop all
echo 'Pre-Install Script Finished'