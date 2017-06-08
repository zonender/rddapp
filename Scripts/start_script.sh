#!/bin/bash
echo 'Starting Start Script'
pm2 start /bin/www --name RubberDuckyDashboard
echo 'Start Script Finished!'