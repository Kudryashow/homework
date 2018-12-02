#!/usr/bin/env bash

sudo apt install autoconf
sudo apt install laravel
cd
git clone git://github.com/xdebug/xdebug.git
cd xdebug
sudo phpize
./configure --enable-xdebug
mkdir /usr/lib/php/modules
sudo cp modules/xdebug.so /usr/lib/php/modules/xdebug.so

