#!/bin/sh

echo "Start tor service"
service tor start

echo "Start polipo service"
service polipo start

service tor status
service polipo status

echo "Sleep 5s ..."
sleep 5
echo "Sleep 5s... DONE"


java -jar selenium-server-standalone-3.5.3.jar


