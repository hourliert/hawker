#!/bin/bash

curl -sL https://deb.nodesource.com/setup | sudo bash -

sudo apt-get install -y git nodejs

sudo npm i -g hawker

#ask for json file
read -p "Specify the path of your configuration file: " JSON_PATH

#launch hawker on json file
hawker launch -f "$JSON_PATH"
