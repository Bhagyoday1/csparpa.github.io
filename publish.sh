#!/bin/bash
echo '***Clearing ./output/blog/ folder...'
rm -rfv output/blog
echo '***Generating blog content...'
pelican content -o output/blog
echo '***Copying images to blog...'
mkdir output/blog/img
cp images/*.png output/blog/img
echo '***Copying static website to ./output/ folder...'
cp -R website/* output/
echo '***Pushing to GitHub pages on csparpa.github.io@master...'
ghp-import output
git push http://github.com/csparpa/csparpa.github.io gh-pages:master
