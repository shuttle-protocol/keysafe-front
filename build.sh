#!/bin/bash

if [ -f "build.zip" ];then
	rm build.zip
fi

yarn build
if [ $? -eq 0 ]; then
  echo "build success"
else
  echo "build failed"
fi

echo 'zip...'
zip -r ./build.zip ./build

if [ $? -eq 0 ]; then
  echo "zip success"
else
  echo "zip failed"
fi

scp build.zip jiangyan@47.93.85.187:/tmp/
scp build.zip keysafe@154.23.179.150:/tmp/

# aliyun, password: ks123
# scp build.zip jiangyan@47.93.85.187:/tmp/

# hk, password: ks123
# scp build.zip keysafe@154.23.179.150:/tmp/