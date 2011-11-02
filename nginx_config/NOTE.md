# Notes on reply header optimisation with Nginx proxy

I can see this:

                  % curl -6 http://localhost:82/feeds/504.csv -v
                  * About to connect() to localhost port 82 (#0)
                  *   Trying ::1... connected
                  * Connected to localhost (::1) port 82 (#0)
                  > GET /feeds/504.csv HTTP/1.1
                  > User-Agent: curl/7.21.4 (x86_64-pc-linux-gnu) libcurl/7.21.4 GnuTLS/2.10.5 zlib/1.2.5 libidn/1.22
                  > Host: localhost:82
                  > Accept: */*
                  >
                  < HTTP/1.1 200 OK
                  < Server: nginx/1.0.6
                  < Date: Wed, 02 Nov 2011 18:07:11 GMT
                  < Content-Type: text/plain; charset=utf-8
                  < Connection: keep-alive
                  < Last-Modified: Wed, 02 Nov 2011 18:07:09 GMT
                  < X-Pachube-Logging-Key: logging.6hLvdI8DjdJP1gRr2X30
                  < X-PachubeRequestId: 903ed3dea9830689cac1544ac299f08cc9c36df6
                  < Cache-Control: max-age=5
                  < Content-Length: 232
                  < Age: 0
                  < Vary: Accept-Encoding
                  <
                  0,2011-11-02T18:07:09.396577Z,18
                  1,2011-11-02T18:07:09.396577Z,93
                  2,2011-11-02T18:07:09.396577Z,292
                  3,2011-11-02T18:07:09.396577Z,0
                  4,2011-11-02T18:07:09.396577Z,0
                  5,2011-11-02T18:07:09.396577Z,0
                  * Connection #0 to host localhost left intact
                  * Closing connection #0
                  6,2011-11-02T18:07:09.396577Z,-28307

May be it could be squized down!
This is we'd like to have:

                  < HTTP/1.1 200 OK
                  < Content-Type: text/plain; charset=utf-8
                  < Connection: keep-alive
                  < Content-Length: 232
                  <

But this is what Nginx can do:

                  < HTTP/1.1 200 OK
                  < Server: nginx/1.0.6
                  < Date: Wed, 02 Nov 2011 21:47:05 GMT
                  < Content-Type: text/plain; charset=utf-8
                  < Connection: keep-alive
                  < Content-Length: 22
                  <

Well, this is the actual content:
(No need to change that at all)

                  0,2011-11-02T18:07:09.396577Z,18
                  1,2011-11-02T18:07:09.396577Z,93
                  2,2011-11-02T18:07:09.396577Z,292
                  3,2011-11-02T18:07:09.396577Z,0
                  4,2011-11-02T18:07:09.396577Z,0
                  5,2011-11-02T18:07:09.396577Z,0
                  * Connection #0 to host localhost left intact
                  * Closing connection #0
                  6,2011-11-02T18:07:09.396577Z,-28307

## Comments

I doubt that these will be needed:

                  < Age: 0
                  < Vary: Accept-Encoding

The 'Date' headers is quite useles:

                  < Date: Wed, 02 Nov 2011 18:07:11 GMT

As well as 'Last-Modified', because it is as you notice
the same as the second column on the firs line of CSV:

                  < Last-Modified: Wed, 02 Nov 2011 18:07:09 GMT

I really don't think that this could be used by a node:

                  < X-Pachube-Logging-Key: logging.6hLvdI8DjdJP1gRr2X30
                  < X-PachubeRequestId: 903ed3dea9830689cac1544ac299f08cc9c36df6

There is hardly any use for this either:

                  < Cache-Control: max-age=5

Nevertheless, Nginx seem to ignore these settings:

                  proxy_hide_header Date;
                  proxy_hide_header Server;

I imagine it wants to be compliant to the HTTP specification!
