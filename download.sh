OS_TYPE=`uname -m`

wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-${OS_TYPE}.tar.bz2

tar xjvf phantomjs-2.1.1-linux-${OS_TYPE}.tar.bz2

echo "Remove phantomjs-2.1.1-linux-${OS_TYPE}.tar.bz2"
rm -rf phantomjs-2.1.1-linux-${OS_TYPE}.tar.bz2

mv phantomjs-2.1.1-linux-x86_64 phantomjs

echo "Install Java"
sudo add-apt-repository ppa:webupd8team/java
sudo apt update; sudo apt install oracle-java8-installer
javac -version

