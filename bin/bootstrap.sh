#!/bin/bash

curl -sL https://deb.nodesource.com/setup | sudo bash -

sudo apt-get install -y git nodejs

sudo npm i -g hawker

#ask for json file
JSON_ANSWER=

#launch hawker on json file
hawker "$JSON_ANSWER"
