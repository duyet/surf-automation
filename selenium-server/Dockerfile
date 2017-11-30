FROM ubuntu

MAINTAINER Van-Duyet LE

# Install tor, polipo
RUN apt-get update && apt-get install -y tor polipo

# Config tor
RUN echo "socksParentProxy = localhost:9050" >> /etc/polipo/config && \
	echo "ExitNodes {vn}\nStrictNodes 1\nGeoIPExcludeUnknown 1\nAllowSingleHopCircuits 0\n" >> /etc/tor/torrc && \
	echo "HashedControlPassword 16:3D3141CE88F19EBB6037F1CF11853DC6260B5A385D9558516EB36BAB99\n" >> /etc/tor/torrc && \
	echo "ControlPort 9051\nCookieAuthentication 1\n"  >> /etc/tor/torrc

RUN service tor restart && service polipo restart

# Install Java.
RUN \
  apt-get update && \
  apt-get install -y openjdk-8-jre && \
  rm -rf /var/lib/apt/lists/*
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64


# Copy source
RUN mkdir /app
COPY . /app

WORKDIR /app

# Start service
ENV PATH="${PATH}:/app/phantomjs/bin" 
EXPOSE 4444 8123

CMD [ "java", "-jar",  "selenium-server-standalone-3.5.3.jar" ]
