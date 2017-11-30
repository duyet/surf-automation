t=1
while true; do printf "AUTHENTICATE \"123456\"\r\nSIGNAL NEWNYM\r\n" | nc 127.0.0.1 9051; sleep 4; node main; t=`expr $t + 1`; echo "==========> $t"; done
