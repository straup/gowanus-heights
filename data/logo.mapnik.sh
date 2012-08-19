#!/bin/sh

nik2img.py -b -74.003 40.67 -73.977 40.691 -f png -d 1024 768 logo.mapnik.xml logo.png

nik2img.py -b -74.003 40.67 -73.977 40.691 -f svg logo.mapnik.xml logo.svg
